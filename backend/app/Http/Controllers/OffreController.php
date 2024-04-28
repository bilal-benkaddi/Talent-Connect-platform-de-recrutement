<?php

namespace App\Http\Controllers;

use App\Models\Offre;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class OffreController extends Controller
{
    public function index(): Collection
    {
        return Offre::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'entreprise_id' => "required|numeric",
            'titre' => "required|string",
            'domaine' => "required|min:2",
            'niveau_etude' => "min:4",
            'experience' => "min:4",
            'nombre_poste' => "required",
            'secteur_activite' => "required",
            'type_emploi' => "required",
            'lieu' => "required",
            'description' => "required",
            'date_Publication' => "required|date",
            'date_limite_candidature' => "required|date",
            'salaire' => "numeric",
            'type_contrat',
        ]);
        $offre = Offre::create($validated);
        return $offre;
    }

    /**
     * Display the specified resource.
     */
    public function show(Offre $offre)
    {
        return $offre->load('entreprise', 'candidatures');
    }

    public function update(Request $request, Offre $offre)
    {
        $validated = $request->validate([
            'entreprise_id' => "required|numeric",
            'titre' => "required|string",
            'domaine' => "required|min:2",
            'niveau_etude' => "min:4",
            'experience' => "min:4",
            'nombre_poste' => "required",
            'secteur_activite' => "required",
            'type_emploi' => "required",
            'lieu' => "required",
            'description' => "required",
            'date_Publication' => "required|date",
            'date_limite_candidature' => "required|date",
            'salaire' => "numeric",
            'type_contrat',
        ]);
        $offre->update($validated);

        return $offre;
    }
    public function destroy(Offre $offre)
    {
        $offre->delete();
    }
}
