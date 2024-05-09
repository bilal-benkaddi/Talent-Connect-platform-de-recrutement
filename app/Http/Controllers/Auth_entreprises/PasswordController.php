<?php
namespace App\Http\Controllers\Auth_Entreprises;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
    /*
     Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'string'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);
        $user = $request->user("entreprise");
    
        if (!Hash::check($request->current_password, $user->password)) {
            return redirect()->back()->withErrors(['current_password' => 'Incorrect password']);
        }
        $request->user("entreprise")->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back();
    }
}
