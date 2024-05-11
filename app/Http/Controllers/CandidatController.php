<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Candidat;
use Illuminate\Http\Request;
use App\Models\Profilecandidat;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class CandidatController extends Controller
{
    public function index()
    {
        $candidats = Candidat::all();
        return Inertia::render('candidats/index', [
            'candidats' => $candidats,
            "candidat" => Auth::guard("candidat")->user(),
            'mustVerifyEmail' => Auth::guard("candidat")->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Candidats/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'candidats_id' => 'required|exists:candidats,id',
            'cin' => 'required',
            'photo' => 'mimes:png,jpg',
            'niveau_etude' => 'required',
            'cerificate' => 'required',
            'nom_certificate' => 'required',
            'date_obtenation_certificate' => 'required|date',
            'competance' => 'required',
            'diplome' => 'required',
            'etablissement' => 'required',
            'date_obtenation_diplome' => 'required|date',
            'date_debut_experience' => 'required|date',
            'date_fin_experience' => 'required|date',
            'description_experience' => 'required',
            'langue' => 'required',
            'niveau_langue' => 'required',
        ]);

        $validated['photo'] = $request->file('photo')->store('profiles', 'public');
        $profilecandidat = Profilecandidat::create($validated);

        $profilecandidat->certificates()->create([
            'cerificate' => $validated['cerificate'],
            'nom_certificate' => $validated['nom_certificate'],
            'date_obtenation_certificate' => $validated['date_obtenation_certificate'],
        ]);

        $profilecandidat->competences()->create([
            'competance' => $validated['competance'],
        ]);

        $profilecandidat->diplomes()->create([
            'diplome' => $validated['diplome'],
            'etablissement' => $validated['etablissement'],
            'date_obtenation_diplome' => $validated['date_obtenation_diplome'],
        ]);

        $profilecandidat->experiences()->create([
            'date_debut_experience' => $validated['date_debut_experience'],
            'date_fin_experience' => $validated['date_fin_experience'],
            'description_experience' => $validated['description_experience'],
        ]);

        $profilecandidat->langues()->create([
            'langue' => $validated['langue'],
            'niveau_langue' => $validated['niveau_langue'],
        ]);

        return Redirect::route('candidats.index');
    }


    public function edit(Candidat $candidat)
    {
        return Inertia::render('Candidats/Edit', [
            'candidat' => $candidat,
        ]);
    }

    public function update(Request $request, Profilecandidat $profilecandidat)
    {
        $validated = $request->validate([
            'candidats_id' => 'required|exists:candidats,id',
            'cin' => 'required',
            'photo' => 'mimes:png,jpg',
            'niveau_etude' => 'required',
            'cerificate' => 'required',
            'nom_certificate' => 'required',
            'date_obtenation_certificate' => 'required|date',
            'competance' => 'required',
            'diplome' => 'required',
            'etablissement' => 'required',
            'date_obtenation_diplome' => 'required|date',
            'date_debut_experience' => 'required|date',
            'date_fin_experience' => 'required|date',
            'description_experience' => 'required',
            'langue' => 'required',
            'niveau_langue' => 'required',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('profiles', 'public');
        }
        $profilecandidat->update($validated);

        $profilecandidat->certificates()->update([
            'cerificate' => $validated['cerificate'],
            'nom_certificate' => $validated['nom_certificate'],
            'date_obtenation_certificate' => $validated['date_obtenation_certificate'],
        ]);

        $profilecandidat->competences()->update([
            'competance' => $validated['competance'],
        ]);

        $profilecandidat->diplomes()->update([
            'diplome' => $validated['diplome'],
            'etablissement' => $validated['etablissement'],
            'date_obtenation_diplome' => $validated['date_obtenation_diplome'],
        ]);

        $profilecandidat->experiences()->update([
            'date_debut_experience' => $validated['date_debut_experience'],
            'date_fin_experience' => $validated['date_fin_experience'],
            'description_experience' => $validated['description_experience'],
        ]);

        $profilecandidat->langues()->update([
            'langue' => $validated['langue'],
            'niveau_langue' => $validated['niveau_langue'],
        ]);

        return Redirect::route('candidats.index');
    }

    public function destroy(Candidat $candidat)
    {
        $candidat->delete();
        return Redirect::route('candidats.index')->with('success', 'Candidat deleted successfully');
    }
}
