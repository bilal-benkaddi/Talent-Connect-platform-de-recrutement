<?php

use Inertia\Inertia;
use App\Models\Offre;
use App\Models\Entreprise;
use Illuminate\Support\Facades\Auth;
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
    ]);
});


Route::get('/welcome/user', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name("welcome.user");


Route::get('/welcome/candidat', function () {
    return Inertia::render('Welcome_Candidat', [
        "candidat" => Auth::guard("candidat")->user(),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name("welcome.candidat");



Route::get('/welcome/entreprise', function () {
    $entreprise = Auth::guard("entreprise")->user();
    $canLogin = Route::has('entreprises.login');
    $canRegister = Route::has('entreprises.register');
    if(Auth::guard("entreprise")->user()){
        $offers = Offre::with('entreprise')->where('entreprise_id', $entreprise->id)->get();
    }else{
        $offers =null;
    }
    return Inertia::render('Welcome_Entreprise', compact('entreprise', 'canLogin', 'canRegister', 'offers'));
})->name("welcome.entreprise");



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::prefix("entreprises")->name("entreprises.")->group(function(){
    require __DIR__.'/entreprise.php';
});

Route::prefix("candidats")->name("candidats.")->group(function(){
    require __DIR__.'/candidat.php';
});




Route::get('/candidats',  [CandidatController::class , "index"])->name('candidats.index');

/*

Route::get('/candidats',  [CandidatController::class , "index"])->name('candidats.index');
Route::get('/candidats/create',  [CandidatController::class , "create"])->name('candidats.create');
Route::post('/candidats',  [CandidatController::class , "store"])->name('candidats.store');
Route::get('/candidats/{candidat}/edit',  [CandidatController::class , "edit"])->name('candidats.edit');
Route::put('/candidats/{candidat}',  [CandidatController::class , "update"])->name('candidats.update');
Route::delete('/candidats/{candidat}',  [CandidatController::class , "destroy"])->name('candidats.destroy');



Route::resource('candidats', CandidatController::class);
Route::resource('candidatures', CandidatureController::class);
Route::resource('entreprises', EntrepriseController::class); */

Route::resource('offres', OffreController::class)->middleware("entreprise");

Route::get('offres/index', [OffreController::class,"index"])->name("offres.index");

Route::get('offres', [OffreController::class,"index"])->name("offres.index");
