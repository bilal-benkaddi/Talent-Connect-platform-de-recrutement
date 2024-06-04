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
            $offers = Offre::with('entreprise')->orderBy("created_at", "desc")->get();
            return Inertia::render('Offers/IndexEntreprise', [
                'offers' => $offers,
                "entreprise" => $entreprise
            ]);
        }
        if (Auth::guard("candidat")->check()) {
            $candidat = Auth::guard("candidat")->user();
            $offers = Offre::with('entreprise')->orderBy("created_at", "desc")->get();
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

        if (!$request->filled('date_Publication')) {
            $request->merge(['date_Publication' => now()]);
        }

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
            'date_Publication' => 'required|date|before_or_equal:' . now()->addDays(10),
            'date_limite_candidature' => 'required|date|after_or_equal:date_Publication',
            'salaire' => 'numeric',
            'type_contrat' => "required",
        ], [
            'titre.required' => 'Le titre est obligatoire.',
            'titre.string' => 'Le titre doit être une chaîne de caractères.',
            'domaine.required' => 'Le domaine est obligatoire.',
            'domaine.min' => 'Le domaine doit avoir au moins :min caractères.',
            'niveau_etude.min' => 'Le niveau d\'étude doit avoir au moins :min caractères.',
            'experience.min' => 'L\'expérience doit avoir au moins :min caractères.',
            'nombre_poste.required' => 'Le nombre de postes est obligatoire.',
            'secteur_activite.required' => 'Le secteur d\'activité est obligatoire.',
            'type_emploi.required' => 'Le type d\'emploi est obligatoire.',
            'lieu.required' => 'Le lieu est obligatoire.',
            'description.required' => 'La description est obligatoire.',
            'date_Publication.required' => 'La date de publication est obligatoire.',
            'date_Publication.date' => 'La date de publication doit être une date valide.',
            'date_Publication.before_or_equal' => 'La date de publication doit être aujourd\'hui ou dans les 10 jours à venir.',
            'date_limite_candidature.required' => 'La date limite de candidature est obligatoire.',
            'date_limite_candidature.date' => 'La date limite de candidature doit être une date valide.',
            'date_limite_candidature.after_or_equal' => 'La date limite de candidature doit être égale ou après la date de publication.',
            'salaire.numeric' => 'Le salaire doit être un nombre.',
            'type_contrat.required' => 'Le type de contrat est obligatoire.',
        ]);

        if (strtotime($validated['date_limite_candidature']) - strtotime($validated['date_Publication']) < 10 * 24 * 60 * 60) {
            $validated['date_Publication'] = now()->addDays(10)->format('Y-m-d');
        }

        $validated['entreprise_id'] = $entreprise_id;
        Offre::create($validated);

        return redirect()->route('offres.index')->with('success', 'Offre créée avec succès.');
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
