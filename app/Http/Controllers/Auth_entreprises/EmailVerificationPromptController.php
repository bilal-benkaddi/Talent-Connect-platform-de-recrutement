<?php

namespace App\Http\Controllers\Auth_Entreprises;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmailVerificationPromptController extends Controller
{
    /**
     * Display the email verification prompt.
     */
    public function __invoke(Request $request): RedirectResponse|Response
    {
        return $request->user('entreprise')->hasVerifiedEmail()
                    ? redirect()->intended(RouteServiceProvider::HOME)
                    : Inertia::render('Auth_entreprises/VerifyEmail', ['status' => session('status')]);
    }
}
