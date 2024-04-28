<?php

namespace App\Http\Controllers;

use App\Models\Candidat;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class CandidatController extends Controller
{
    public function index(): Collection
    {
        return Candidat::all();
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom'=>"required|min:3",
            'prenom'=>"required|min:3",
            'date_de_naissance'=>"required|date",
            'email'=>"required|unique:candidats|email",
            'image'=>"mimes:png,jpg",
            'password'=>"password",
            'telephone'=>"required|min:10|max:14",
            'Adresse_postale'=>"required"
        ]);
        $validated['image'] = $request->file('image')->store('profiles', "public");
        $candidat =Candidat::create($validated);
        return $candidat;
    }
    public function show(Candidat $candidat)
    {
        return $candidat;
    }
    public function update(Request $request, Candidat $candidat)
    {
        $validated = $request->validate([
            'nom'=>"required|min:3",
            'prenom'=>"required|min:3",
            'date_de_naissance'=>"required|date",
            'email'=>"required|unique:candidats|email",
            'image'=>"mimes:png,jpg",
            'password'=>"password",
            'telephone'=>"required|min:10|max:14",
            'Adresse_postale'=>"required"
        ]);
        if($request->hasFile("image")){
            $validated['image'] = $request->file('image')->store('profiles', "public");
        }
        $candidat->update($validated);
        return $candidat;
    }
    public function destroy(Candidat $candidat)
    {
        $candidat->delete();
    }
}
