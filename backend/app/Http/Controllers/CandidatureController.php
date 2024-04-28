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
            'offre_emploi_id',
            'candidat_id',
            'cv',
            'lettre_de_motivation',
        ]);
    }

    public function show(Candidature $candidature)
    {
        return $candidature->load("offre", "candidat");
    }
    public function update(Request $request, Candidature $candidature)
    {
        //
    }
    public function destroy(Candidature $candidature)
    {
        //
    }
}
