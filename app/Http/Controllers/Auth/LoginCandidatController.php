<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginCandidatController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if (Auth::guard('candidat')->attempt($credentials)) {
            return redirect()->route('candidats.index');
        }

        return redirect()->back()->withErrors(['email' => 'The provided credentials do not match our records of candidates.']);
    }
}