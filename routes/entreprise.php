<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileentrepriseController;

Route::get('/dashboard', [DashboardController::class ,"entrepriseDashboard"])->middleware('entreprise')->name('dashboard');

Route::middleware('entreprise')->group(function () {
    Route::get('/profile', [ProfileentrepriseController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileentrepriseController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileentrepriseController::class, 'destroy'])->name('profile.destroy');
});
require __DIR__.'/entreprises_auth.php';


