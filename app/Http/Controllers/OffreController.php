<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Offre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class OffreController extends Controller
{
    public function index()
    {
        if (Auth::guard("entreprise")->check()) {
            $entreprise = Auth::guard("entreprise")->user();
            $offers = Offre::with('entreprise')->get();
            return Inertia::render('Offers/IndexEntreprise', [
                'offers' => $offers,
                "entreprise" => $entreprise
            ]);
        }
        if (Auth::guard("candidat")->check()) {
            $candidat = Auth::guard("candidat")->user();
            $offers = Offre::with('entreprise')->get();
            return Inertia::render('Offers/IndexCandidat', [
                'offers' => $offers,
                "candidat" => $candidat
            ]);
        }
    }

    public function create()
    {
        if (Auth::guard("entreprise")->user()) {
            $entreprise = Auth::guard("entreprise")->user();
            return Inertia::render('Offers/Create', [
                "entreprise" => $entreprise
            ]);
        }

        abort(403, "This action is unauthorized fllow back.", ["title" => "unauthorized"]);
    }
    public function store(Request $request)
    {
        $entreprise_id = Auth::guard("entreprise")->user()->id;
        $validated = $request->validate([
            'entreprise_id' => "numeric",
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
            'type_contrat' => "required",
        ]);
        $validated['entreprise_id'] = $entreprise_id;
        Offre::create($validated);
        return redirect()->route('offres.index')->with('success', 'Offre created successfully');
    }

    public function show(Offre $offre)
    {
        $entreprise = Auth::guard("entreprise")->user();
        $candidatures = DB::table('candidatures')->where('offre_id', $offre->id)->get();
        //dd('candidatures' , $candidatures,);
        return Inertia::render('Offers/Show', [
            'offre' => $offre,
            'entreprise' => $entreprise,
            'candidatures' => $candidatures,
        ]);
    }

    public function close(Request $request, Offre $offre)
    {
        if (!$request->user("entreprise")->can('update', $offre)) {
            abort(403, "This action is unauthorized. <a href=`/login`> to login<a/>", ["title" => "unauthorized <a href=`/login`> to login<a/>"]);
        }
        $offre->update(['date_limite_candidature' => now()]);
        return redirect()->route('offres.index')->with('success', 'Offre closed successfully');
    }

    public function edit(Request $request, Offre $offre)
    {
        if (Auth::guard("entreprise")->user()) {
            if ($request->user("entreprise")->can('update', $offre)) {
                $entreprise = Auth::guard("entreprise")->user();
                return Inertia::render('Offers/Edit', [
                    'offre' => $offre,
                    "entreprise" => $entreprise
                ]);
            }
            //Gate::authorize('update', $offre);
        }
        abort(403, "This action is unauthorized fllow back.", ["title" => "unauthorized"]);
    }

    public function update(Request $request, Offre $offre)
    {
        if (!$request->user("entreprise")->can('update', $offre)) {
            abort(403, "This action is unauthorized. <a href=`/login`> to login<a/>", ["title" => "unauthorized <a href=`/login`> to login<a/>"]);
        }
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
            'type_contrat' => 'required',
            'entreprise_id' => 'numeric',
        ]);
        $offre->update($validated);
        return redirect()->route('offres.index')->with('success', 'Offre updated successfully');
    }

    public function destroy(Request $request, Offre $offre)
    {
        if (!$request->user("entreprise")->can('delete', $offre)) {
            abort(403, "This action is unauthorized.", ["title" => "unauthorized"]);
        }
        $offre->delete();
        return redirect()->route('offres.index')->with('success', 'Offre deleted successfully');
    }
}
