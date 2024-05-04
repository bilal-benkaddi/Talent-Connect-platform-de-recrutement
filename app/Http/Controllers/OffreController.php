<?php

namespace App\Http\Controllers;

use App\Models\Offre;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OffreController extends Controller
{
    public function index()
    {
        $offers = Offre::all();
        return Inertia::render('Offres/Index', [
            'offers' => $offers,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'entreprise_id' => 'required|numeric',
            'titre' => 'required|string',
            'domaine' => 'required|min:2',
            'niveau_etude' => 'min:4',
            'experience' => 'min:4',
            'nombre_poste' => 'required',
            'secteur_activite' => 'required',
            'type_emploi' => 'required',
            'lieu' => 'required',
            'description' => 'required',
            'date_Publication' => 'required|date',
            'date_limite_candidature' => 'required|date',
            'salaire' => 'numeric',
            'type_contrat',
        ]);
        $offre = Offre::create($validated);
        return redirect()->route('offres.index')->with('success', 'Offre created successfully');
    }

    public function show(Offre $offre)
    {
        return Inertia::render('Offres/Show', [
            'offre' => $offre,
        ]);
    }

    public function edit(Offre $offre)
    {
        return Inertia::render('Offres/Edit', [
            'offre' => $offre,
        ]);
    }

    public function update(Request $request, Offre $offre)
    {
        $validated = $request->validate([
            'entreprise_id' => 'required|numeric',
            'titre' => 'required|string',
            'domaine' => 'required|min:2',
            'niveau_etude' => 'min:4',
            'experience' => 'min:4',
            'nombre_poste' => 'required',
            'secteur_activite' => 'required',
            'type_emploi' => 'required',
            'lieu' => 'required',
            'description' => 'required',
            'date_Publication' => 'required|date',
            'date_limite_candidature' => 'required|date',
            'salaire' => 'numeric',
            'type_contrat',
        ]);
        $offre->update($validated);
        return redirect()->route('offres.index')->with('success', 'Offre updated successfully');
    }

    public function destroy(Offre $offre)
    {
        $offre->delete();
        return redirect()->route('offres.index')->with('success', 'Offre deleted successfully');
    }
}
