<?php

use App\Http\Controllers\CandidatController;
use App\Http\Controllers\CandidatureController;
use App\Http\Controllers\EntrepriseController;
use App\Http\Controllers\OffreController;
use App\Http\Controllers\OffreEmploiController;
use App\Http\Controllers\ProfilecandidatController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('entreprises', EntrepriseController::class);
Route::apiResource('Profilecandidats', ProfilecandidatController::class);
Route::apiResource('candidats', CandidatController::class);
Route::apiResource('offres', OffreController::class);
Route::apiResource('candidatures', CandidatureController::class);
