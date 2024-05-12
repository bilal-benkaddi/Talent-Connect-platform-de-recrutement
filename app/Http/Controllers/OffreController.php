<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Offre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OffreController extends Controller
{
    public function index()
    {
        $entreprise = Auth::guard("entreprise")->user();
        $offers = Offre::with('entreprise')->get();
        return Inertia::render('Offers/Index', [
            'offers' => $offers,
            "entreprise"=>$entreprise
        ]);
    }

    public function create()
    {
        $entreprise = Auth::guard("entreprise")->user();
        return Inertia::render('Offers/Create',[
            "entreprise"=>$entreprise
        ]);
    }
    public function store(Request $request)
    {
        $entreprise_id = Auth::guard("entreprise")->user()->id;
        $validated = $request->validate([
            'entreprise_id'=>"numeric",
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
        $validated['entreprise_id'] = $entreprise_id;
        Offre::create($validated);
        return redirect()->route('offres.index')->with('success', 'Offre created successfully');
    }

    public function show(Offre $offre)
    {
        $entreprise = Auth::guard("entreprise")->user();
        return Inertia::render('Offers/Show', [
            'offre' => $offre,
            "entreprise"=>$entreprise
        ]);
    }
    public function close(Offre $offre)
    {
        $offre->update(['date_limite_candidature' => now()]);
        return redirect()->route('offres.index')->with('success', 'Offre closed successfully');
    }

    public function edit(Offre $offre)
    {
        $entreprise = Auth::guard("entreprise")->user();
        return Inertia::render('Offers/Edit', [
            'offre' => $offre,
            "entreprise"=>$entreprise
        ]);
    }

    public function update(Request $request, Offre $offre)
    {	
        $validated = $request->validate([
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
            'type_contrat'=> 'required',
            'entreprise_id' => 'numeric',
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
