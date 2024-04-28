<?php

namespace App\Http\Controllers;

use App\Models\Candidature;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class CandidatureController extends Controller
{
    public function index(): Collection
    {
        return Candidature::all();;
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'offre_emploi_id' => "required|integer|numeric",
            'candidat_id' => "required|integer|numeric",
            'cv' => "required|file|mimes:pdf",
            'lettre_de_motivation' => "required|file|mimes:pdf",
        ]);
        $validated['cv'] = $request->file('cv')->store('CV', "public");
        $validated['lettre_de_motivation'] = $request->file('lettre_de_motivation')->store("lettre_de_motivation", "public");
        $candidature = Candidature::create($validated);
        return $candidature;
    }

    public function show(Candidature $candidature)
    {
        return $candidature->load("offre", "candidat");
    }
    public function update(Request $request, Candidature $candidature)
    {
        $validated = $request->validate([
            'offre_emploi_id' => "required|integer|numeric",
            'candidat_id' => "required|integer|numeric",
            'cv' => "required|file|mimes:pdf",
            'lettre_de_motivation' => "required|file|mimes:pdf",
        ]);
        if ($request->hasFile("cv")) {
            $validated['cv'] = $request->file('cv')->store('CV', "public");
        }
        if ($request->hasFile("lettre_de_motivation")) {
            $validated['lettre_de_motivation'] = $request->file('lettre_de_motivation')->store("lettre_de_motivation", "public");
        }
        $candidature->update($validated);
        return $candidature;
    }
    public function destroy(Candidature $candidature)
    {
        $candidature->delete();
    }
}
