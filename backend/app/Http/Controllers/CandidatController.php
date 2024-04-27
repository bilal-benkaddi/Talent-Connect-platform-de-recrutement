<?php

namespace App\Http\Controllers;

use App\Models\Candidat;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class CandidatController extends Controller
{
    public function index():Collection
    {
        return Candidat::all() ;
    }
    public function store(Request $request)
    {
        //
    }
    public function show(Candidat $candidat)
    {
        return $candidat ;
    }
    public function update(Request $request, Candidat $candidat)
    {
        //
    }
    public function destroy(Candidat $candidat)
    {
        //
    }
}
