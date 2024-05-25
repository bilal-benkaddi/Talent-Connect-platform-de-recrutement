<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Offre;
use App\Models\Entreprise;
use App\Models\Candidature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class WelcomeController extends Controller
{
    public function welcomeUser()
    {
        $entreprises = Entreprise::all();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'entreprises' => $entreprises,
        ]);
    }

    public function welcomeCandidat()
    {
        if (Auth::guard("candidat")->user()) {
            $offers = Offre::all();
        } else {
            $offers = null;
        }
        return Inertia::render('Welcome_Candidat', [
            "candidat" => Auth::guard("candidat")->user(),
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'offers' => $offers,
        ]);
    }

    public function welcomeEntreprise()
    {
        $entreprise = Auth::guard("entreprise")->user();
        $canLogin = Route::has('entreprises.login');
        $canRegister = Route::has('entreprises.register');
        if (Auth::guard("entreprise")->user()) {
            $offers = Offre::with('entreprise')->where('entreprise_id', $entreprise->id)->get();
        } else {
            $offers = null;
        }
        return Inertia::render('Welcome_Entreprise', compact('entreprise', 'canLogin', 'canRegister', 'offers'));
    }
}
