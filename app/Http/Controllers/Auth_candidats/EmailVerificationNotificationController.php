<?php

namespace App\Http\Controllers\Auth_candidats;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class EmailVerificationNotificationController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        if ($request->user("candidat")->hasVerifiedEmail()) {
            return redirect()->intended(RouteServiceProvider::HOME);
        }

        $request->user("candidat")->sendEmailVerificationNotification();

        return back()->with('status', 'verification-link-sent');
    }
}
