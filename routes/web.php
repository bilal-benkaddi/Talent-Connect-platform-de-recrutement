<?php

use Inertia\Inertia;
use App\Models\Offre;
use App\Models\Entreprise;
use App\Models\Candidature;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\OffreController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
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
    return Inertia::render('Accueil');
});


Route::get('/welcome/user', [WelcomeController::class, "welcomeUser"])
    ->name("welcome.user");

Route::get('/welcome/candidat', [WelcomeController::class, "welcomeCandidat"])
    ->name("welcome.candidat");

Route::get('/welcome/entreprises', [WelcomeController::class, "welcomeEntreprise"])
    ->name("welcome.entreprise");



    Route::get('/dashboard', [EntrepriseController::class, 'offersPerMonth'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::prefix("entreprises")->name("entreprises.")->group(function () {
    require __DIR__ . '/entreprise.php';
});

Route::prefix("candidats")->name("candidats.")->group(function () {
    require __DIR__ . '/candidat.php';
});


Route::get('/candidatures/{candidature}/cv', [CandidatureController::class, 'viewCV'])->name('candidatures.cv');
Route::get('/candidatures/{candidature}/lettre_motivation', [CandidatureController::class, 'viewLettreMotivation'])->name('candidatures.lettre_motivation');


Route::get('/candidats',  [CandidatController::class, "index"])->name('candidats.index');
Route::get('/candidats/{id}',  [CandidatController::class, "show"])->name('candidats.show');

/*

Route::resource('candidatures', CandidatureController::class)->middleware(["entreprise","auth"]);
Route::get('offres/index', [OffreController::class,"index"])->name("offres.index");

Route::get('offres', [OffreController::class,"index"])->name("offres.index");
Route::post('offres', [OffreController::class,"Store"])->name("offers.store");
*/
Route::resource('offres', OffreController::class);
Route::get('candidatures/create/{offer}', [CandidatureController::class, "create"])
    ->name("candidatures.create");
Route::post('candidatures/store', [CandidatureController::class, "store"])
    ->name("candidatures.store");
Route::get('candidatures', [CandidatureController::class, "index"])
    ->name("candidatures.index");
Route::get('candidatures/{candidature}', [CandidatureController::class, "show"])
    ->name("candidatures.show");

Route::get('/candidatures/{candidature}/edit-status', [CandidatureController::class, 'editStatus'])
    ->name('candidatures.editStatus');

Route::post('/candidatures/{candidature}/update-status', [CandidatureController::class, 'updatestatus'])
    ->name('candidatures.updateStatus');
Route::resource('entreprises', EntrepriseController::class);

Route::get('entreprises/{offre}/candidatures', [EntrepriseController::class, "showForUser"])
    ->middleware("auth")->name("entreprises.candidatures"); 

