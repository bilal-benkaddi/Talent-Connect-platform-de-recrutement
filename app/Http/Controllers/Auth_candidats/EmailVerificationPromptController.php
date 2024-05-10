<?php

namespace App\Http\Controllers\Auth_candidats;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmailVerificationPromptController extends Controller
{
    public function __invoke(Request $request): RedirectResponse|Response
    {
        return $request->user("candidat")->hasVerifiedEmail()
                    ? redirect()->intended(RouteServiceProvider::HOME)
                    : Inertia::render('Auth_candidats/VerifyEmail', ['status' => session('status')]);
    }
}
