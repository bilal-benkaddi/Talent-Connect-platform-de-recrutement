<?php

namespace App\Http\Controllers;

use App\Models\Candidature;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CandidatureController extends Controller
{
    public function index()
    {
        $candidatures = Candidature::all();

        return Inertia::render('Candidatures/Index', [
            'candidatures' => $candidatures,
        ]);
    }

    public function create()
    {
        return Inertia::render('Candidatures/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'offre_emploi_id' => 'required|integer|numeric',
            'candidat_id' => 'required|integer|numeric',
            'cv' => 'required|file|mimes:pdf',
            'lettre_de_motivation' => 'required|file|mimes:pdf',
        ]);
        $validated['cv'] = $request->file('cv')->store('CV', 'public');
        $validated['lettre_de_motivation'] = $request->file('lettre_de_motivation')->store('lettre_de_motivation', 'public');
        $candidature = Candidature::create($validated);
        return redirect()->route('candidatures.index');
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
}
