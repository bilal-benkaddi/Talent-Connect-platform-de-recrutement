<?php

namespace App\Http\Controllers;

use App\Models\Entreprise;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class EntrepriseController extends Controller
{
    public function index(): Collection
    {
        return Entreprise::all();
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom_Entreprise' => "required|min:3|max:120",
            'secteur' => "required|min:3|max:120",
            'adresse' => "required|min:3|max:250",
            'code_postal' => "required|min:2|max:18|numeric",
            'ville' => "required|min:3|max:50",
            'Pays' => "required|min:3|max:120",
            'telephone' => "required|min:10|max:13",
            'email' => "required|min:3|max:120",
            'password' => "required|min:8|max:18",
            'site_web' => "min:3|max:120",
        ]);

        return Entreprise::create($validated);
    }
    public function show(Entreprise $entreprise)
    {
        return $entreprise;
    }
    public function update(Request $request, Entreprise $entreprise)
    {
        $validated = $request->validate([
            'nom_Entreprise' => "required|min:3|max:120",
            'secteur' => "required|min:3|max:120",
            'adresse' => "required|min:3|max:250",
            'code_postal' => "required|min:2|max:18|numeric",
            'ville' => "required|min:3|max:50",
            'Pays' => "required|min:3|max:120",
            'telephone' => "required|min:10|max:13",
            'email' => "required|min:3|max:120",
            'password' => "required|min:8|max:18",
            'site_web' => "min:3|max:120",
        ]);
        $entreprise->update($validated);

        return redirect()->route("candidats.index")->with('success', 'Entreprise updated successfully');
        
    }
    public function destroy(Entreprise $entreprise)
    {
        $entreprise->delete();
        return redirect()->route("candidats.index")->with('success', 'Entreprise deleted successfully');

    }
}
