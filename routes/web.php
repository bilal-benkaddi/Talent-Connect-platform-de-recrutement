<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\OffreController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CandidatController;
use App\Http\Controllers\EntrepriseController;
use App\Http\Controllers\CandidatureController;
use App\Http\Controllers\Auth\LoginCandidatController;
use App\Http\Controllers\Auth\LoginEntrepriseController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/dashboardone', function () {
    return Inertia::render('Welcome');
})->middleware(['entreprise'])->name('dashboardone');


Route::get('/candidats',  [CandidatController::class , "index"])->name('candidats.index');
Route::get('/candidats/create',  [CandidatController::class , "create"])->name('candidats.create');
Route::post('/candidats',  [CandidatController::class , "store"])->name('candidats.store');
Route::get('/candidats/{candidat}/edit',  [CandidatController::class , "edit"])->name('candidats.edit');
Route::put('/candidats/{candidat}',  [CandidatController::class , "update"])->name('candidats.update');
Route::delete('/candidats/{candidat}',  [CandidatController::class , "destroy"])->name('candidats.destroy');



//Route::resource('candidats', CandidatController::class);
Route::resource('candidatures', CandidatureController::class);
Route::resource('entreprises', EntrepriseController::class);
Route::resource('offres', OffreController::class);


Route::get('/login/candidat', function () {
    return inertia('Auth/LoginCandidat');
})->name('login.candidat');

Route::post('/login/candidat', [LoginCandidatController::class, 'authenticate']);

Route::get('/login/entreprise', function () {
    return inertia('Auth/LoginEntreprise');
})->name('login.entreprise');

Route::post('/login/entreprise', [LoginEntrepriseController::class, 'authenticate']);