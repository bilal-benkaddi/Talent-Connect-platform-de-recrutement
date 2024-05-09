<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfilecandidatController;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard_candidat',[
        'candidat' => Auth::guard('candidat')->user(),
        'user' => Auth::guard('candidat')->user(),
    ]);
})->middleware('candidat')->name('dashboard');

Route::middleware('candidat')->group(function () {
    Route::get('/profile', [ProfilecandidatController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfilecandidatController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfilecandidatController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/candidats_auth.php';


