<?php

namespace App\Http\Controllers\Auth_candidats;

use App\Http\Controllers\Controller;
use App\Models\Candidat;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth_candidats/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'date_de_naissance' => 'required|date',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'telephone' => 'required|string|max:255',
            'Adresse_postale' => 'required|string|max:255',
        ]);
        $validated['image'] = $request->file('image')->store('image', 'public');


        $Candidat = Candidat::create($validated);

        event(new Registered($Candidat));

        Auth::login($Candidat);

        return redirect()->route("candidats.index");
    }
}
