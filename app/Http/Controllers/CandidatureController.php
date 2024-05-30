<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Offre;
use App\Models\Candidature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CandidatureController extends Controller
{
    public function __construct()
    {
        $this->middleware('candidat')->only(["index", "create", "store", "edit", "update"]);
        $this->middleware('auth')->only(["edit", "update", "viewLettreMotivation", "viewCV", "destroy"]);
    }
    public function index()
    {
        $candidatures = Candidature::all();
        return Inertia::render('Candidatures/Index', [
            'candidatures' => $candidatures,
        ]);
    }


    public function create($offre)
    {
        $id = $offre;
        $candidat = Auth::guard("candidat")->user();
        $checkCandidatur = Candidature::where("candidat_id", $candidat->id)->where("offre_id", $id)->get();
        if ($checkCandidatur->count() > 0) {
            return redirect()->back()->with('error', 'Vous avez deja postuler pour cette offre');
        }
        return Inertia::render('Candidatures/Create', [
            "offre_id" => $offre,
            "candidat" => $candidat
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'offre_id' => 'required',
            'candidat_id' => 'required',
            'cv' => 'required|file|mimes:pdf',
            'lettre_de_motivation' => 'required|file|mimes:pdf',
        ]);
        $validated['date_de_soumission'] = now()->toDateString();
        $validated['statut'] = 'pending';
        $validated['cv'] = $request->file('cv')->store('CV', 'public');
        $validated['lettre_de_motivation'] = $request->file('lettre_de_motivation')->store('lettre_de_motivation', 'public');
        $validated['offre_id'] = $request->offre_id;
        $checkCandidatur = Candidature::where("candidat_id", $validated['candidat_id'])->where("offre_id", $validated['offre_id'])->get();
        if ($checkCandidatur->count() > 0) {
            return redirect()->back()->with('error', 'Vous avez deja postuler pour cette offre');
        }
        Candidature::create($validated);
        return redirect()->route('candidats.dashboard');
    }

    public function show(Candidature $candidature)
    {
        $candidat = Auth::guard("candidat")->user();
        if (!$candidat->id === $candidature->candidat_id) {
            abort(419);
        }
        $offreId = (int) $candidature->offre_id;

        $offre = DB::table('offres')->where('id', $offreId)->first();

        if (!$offre) {
            $offre = [];
        }
        return Inertia::render('Candidatures/Show', [
            "candidat" => Auth::guard("candidat")->user(),
            'candidature' => $candidature,
            'offre' => $offre,
        ]);
    }



    public function edit(Candidature $candidature)
    {
        return Inertia::render('Candidatures/Edit', [
            'candidature' => $candidature,
        ]);
    }

    public function update(Request $request, Candidature $candidature)
    {
        $validated = $request->validate([
            'offre_emploi_id' => 'required|integer|numeric',
            'candidat_id' => 'required|integer|numeric',
            'cv' => 'required|file|mimes:pdf',
            'lettre_de_motivation' => 'required|file|mimes:pdf',
        ]);
        if ($request->hasFile('cv')) {
            $validated['cv'] = $request->file('cv')->store('CV', 'public');
        }
        if ($request->hasFile('lettre_de_motivation')) {
            $validated['lettre_de_motivation'] = $request->file('lettre_de_motivation')->store('lettre_de_motivation', 'public');
        }
        $candidature->update($validated);
        return redirect()->route('candidatures.index');
    }

    public function destroy(Candidature $candidature)
    {
        $candidature->delete();
        return redirect()->route('candidatures.index')->with('success', 'Candidature deleted successfully');
    }

    public function editStatus(Candidature $candidature)
    {
        return Inertia::render('Candidatures/EditStatus', [
            'candidature' => $candidature,
        ]);
    }

    public function updatestatus(Request $request, Candidature $candidature)
    {
        $validated = $request->validate([
            'status' => 'required|string',
        ]);
        Candidature::where("id", $candidature->id)->update(['statut' => $validated["status"]]);
        //$candidature->update(['statut' => $validated]);
    }


    public function viewCV(Candidature $candidature)
    {
        $cvFilePath = "storage/" . $candidature->CV;
        return response()->download($cvFilePath, "", [], "inline");
    }

    public function viewLettreMotivation(Candidature $candidature)
    {
        $lettreMotivationFilePath = "public/" . $candidature->lettre_de_motivation;
        return response()->download(Storage::path($lettreMotivationFilePath));
    }
}
