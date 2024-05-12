<?php

namespace App\Http\Controllers\Auth_Entreprises;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth_entreprises/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate("entreprise");

        $request->session()->regenerate();

        return redirect()->route("welcome.entreprise");
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('entreprise')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route("entreprises.login");
    }
}
