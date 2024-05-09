<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\EntrepriseUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class ProfileentrepriseController extends Controller
{
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile_entreprise/Edit', [
            "entreprise" => Auth::guard("entreprise")->user(),
            'mustVerifyEmail' => $request->user("entreprise") instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(entrepriseUpdateRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();
        $validatedData['nom_Entreprise'] = $validatedData['name']; 
        unset($validatedData['name']);
        $request->user("entreprise")->fill($validatedData);
        if ($request->user("entreprise")->isDirty('email')) {
            $request->user("entreprise")->verified_at = null;
        }

        $request->user("entreprise")->save();

        return Redirect::route('entreprises.profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'string'],
        ]);
    
        $user = $request->user("entreprise");
    
        if (!Hash::check($request->password, $user->password)) {
            return redirect()->back()->withErrors(['password' => 'Incorrect password']);
        }
        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
