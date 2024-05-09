<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Models\Profilecandidat;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Requests\CandidatUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class ProfilecandidatController extends Controller
{
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile_candidat/Edit', [
            "candidat" => Auth::guard("candidat")->user(),
            'mustVerifyEmail' => $request->user("candidat") instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(CandidatUpdateRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();
        $validatedData['nom'] = $validatedData['name']; // Change 'name' key to 'nom'
        unset($validatedData['name']); // Remove the 'name' key

        $request->user("candidat")->fill($validatedData);

        if ($request->user("candidat")->isDirty('email')) {
            $request->user("candidat")->verified_at = null;
        }

        $request->user("candidat")->save();

        return Redirect::route('candidats.profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user("candidat");

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
