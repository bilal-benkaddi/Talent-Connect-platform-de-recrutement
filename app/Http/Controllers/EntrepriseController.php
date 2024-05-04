<?php

namespace App\Http\Controllers;

use App\Models\Entreprise;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class EntrepriseController extends Controller
{
    public function index()
    {
        $entreprises = Entreprise::all();
        return Inertia::render('Entreprises/Index', [
            'entreprises' => $entreprises,
        ]);
    }

    public function create()
    {
        return Inertia::render('Entreprises/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom_Entreprise' => 'required|min:3|max:120',
            'secteur' => 'required|min:3|max:120',
            'adresse' => 'required|min:3|max:250',
            'code_postal' => 'required|min:2|max:18|numeric',
            'ville' => 'required|min:3|max:50',
            'Pays' => 'required|min:3|max:120',
            'telephone' => 'required|min:10|max:13',
            'email' => 'required|min:3|max:120',
            'password' => 'required|min:8|max:18',
            'site_web' => 'min:3|max:120',
        ]);
        Entreprise::create($validated);
        return Redirect::route('entreprises.index')->with('success', 'Entreprise created successfully');
    }

    public function show(Entreprise $entreprise)
    {
        return Inertia::render('Entreprises/Show', [
            'entreprise' => $entreprise,
        ]);
    }

    public function edit(Entreprise $entreprise)
    {
        return Inertia::render('Entreprises/Edit', [
            'entreprise' => $entreprise,
        ]);
    }

    public function update(Request $request, Entreprise $entreprise)
    {
        $validated = $request->validate([
            'nom_Entreprise' => 'required|min:3|max:120',
            'secteur' => 'required|min:3|max:120',
            'adresse' => 'required|min:3|max:250',
            'code_postal' => 'required|min:2|max:18|numeric',
            'ville' => 'required|min:3|max:50',
            'Pays' => 'required|min:3|max:120',
            'telephone' => 'required|min:10|max:13',
            'email' => 'required|min:3|max:120',
            'password' => 'required|min:8|max:18',
            'site_web' => 'min:3|max:120',
        ]);
        $entreprise->update($validated);

        return Redirect::route('entreprises.index')->with('success', 'Entreprise updated successfully');
    }

    public function destroy(Entreprise $entreprise)
    {
        $entreprise->delete();
        return Redirect::route('entreprises.index')->with('success', 'Entreprise deleted successfully');
    }
}