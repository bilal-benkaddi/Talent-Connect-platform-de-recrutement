<?php

namespace App\Http\Controllers;

use App\Models\OffreEmploi;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class OffreEmploiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():Collection
    {
        return OffreEmploi::all();
    }

    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(OffreEmploi $offreEmploi)
    {
        return $offreEmploi;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OffreEmploi $offreEmploi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OffreEmploi $offreEmploi)
    {
        //
    }
}
