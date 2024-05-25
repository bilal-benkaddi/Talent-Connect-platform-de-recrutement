<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfilecandidatController;

Route::get('/dashboard', [DashboardController::class ,"candidatDashboard"])->middleware('candidat')->name('dashboard');

Route::middleware('candidat')->group(function () {
    Route::get('/profile', [ProfilecandidatController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfilecandidatController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfilecandidatController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/candidats_auth.php';


