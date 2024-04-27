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
        //
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
        //
    }
    public function destroy(Offre $offre)
    {
        //
    }
}
