<?php
namespace App\Http\Controllers;

use App\Models\Profilecandidat;
use Illuminate\Http\Request;

class ProfilecandidatController extends Controller
{
    public function index()
    {
        $profilecandidats = Profilecandidat::all();
        return view('profilecandidats.index', compact('profilecandidats'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'candidats_id' => 'required|integer',
            'cin' => 'required|string',
            'photo' => 'required|string',
            'niveau_etude' => 'required|string',
        ]);

        Profilecandidat::create($validated);

        return redirect()->route('profilecandidats.index');
    }

    public function update(Request $request, Profilecandidat $profilecandidat)
    {
        $validated = $request->validate([
            'candidats_id' => 'required|integer',
            'cin' => 'required|string',
            'photo' => 'required|string',
            'niveau_etude' => 'required|string',
        ]);

        $profilecandidat->update($validated);

        return redirect()->route('profilecandidats.index');
    }

    public function destroy(Profilecandidat $profilecandidat)
    {
        $profilecandidat->delete();

        return redirect()->route('profilecandidats.index');
    }
}
