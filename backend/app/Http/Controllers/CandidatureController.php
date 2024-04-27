<?php

namespace App\Http\Controllers;

use App\Models\Candidature;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class CandidatureController extends Controller
{
    public function index():Collection
    {
        return Candidature::all();;
    }
    public function store(Request $request)
    {
        //
    }

    public function show(Candidature $candidature)
    {
        return $candidature->load("offre","candidat") ;
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
