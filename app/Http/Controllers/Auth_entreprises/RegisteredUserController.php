<?php

namespace App\Http\Controllers\Auth_Entreprises;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use App\Models\Entreprise;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;

class RegisteredUserController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth_entreprises/Register');
    }
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'nom_Entreprise' => 'required|min:3|max:120',
            "logo" => "required|mimes:png,jpg",
            'adresse' => 'required|min:3|max:250',
            'code_postal' => 'required|numeric',
            'secteur' => 'required|min:3|max:120',
            'ville' => 'required|min:3|max:50',
            'Pays' => 'required|min:3|max:120',
            'telephone' => 'required|min:10|max:13',
            'email' => 'required|min:3|max:120',
            'hr_email' => 'required|min:3|max:120',
            'password' => 'required|min:8',
            'site_web' => 'min:3|max:120',
            'registre_decommerce' => "required|file|mimes:pdf|max:10240",
            "hr_nom" => "required|min:3|max:120",
        ]);
        $validated['registre_decommerce'] = $request->file('registre_decommerce')->store('registre_decommerce', 'public');
        $validated['logo'] = $request->file('logo')->store('logo', 'public');
        $Entreprise = Entreprise::create($validated);


        event(new Registered($Entreprise));

        Auth::login($Entreprise);

        return redirect()->route("welcome.entreprise");
    }
}
