<?php

namespace App\Http\Controllers;

use App\Models\Entreprise;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class EntrepriseController extends Controller
{
    public function index() : Collection
    {
        return Entreprise::all();
    }
    public function store(Request $request)
    {
        //
    }
    public function show(Entreprise $entreprise)
    {
        return $entreprise ;
    }
    public function update(Request $request, Entreprise $entreprise)
    {
        //
    }
    public function destroy(Entreprise $entreprise)
    {
        //
    }
}
