<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileentrepriseController;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard_entreprise',[
        'entreprise' => Auth::guard('entreprise')->user(),
        'user' => Auth::guard('entreprise')->user(),
    ]);
})->middleware('entreprise')->name('dashboard');

Route::middleware('entreprise')->group(function () {
    Route::get('/profile', [ProfileentrepriseController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileentrepriseController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileentrepriseController::class, 'destroy'])->name('profile.destroy');
});
require __DIR__.'/entreprises_auth.php';


