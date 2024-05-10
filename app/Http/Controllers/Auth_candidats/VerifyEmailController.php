<?php

namespace App\Http\Controllers\Auth_candidats;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;

class VerifyEmailController extends Controller
{
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        if ($request->user('candidat')->hasVerifiedEmail()) {
            return redirect()->intended(RouteServiceProvider::HOME.'?verified=1');
        }

        if ($request->user('candidat')->markEmailAsVerified()) {
            event(new Verified($request->user('candidat')));
        }

        return redirect()->intended(RouteServiceProvider::HOME.'?verified=1');
    }
}
