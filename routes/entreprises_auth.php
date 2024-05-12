<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OffreController;
use App\Http\Controllers\Auth_Entreprises\PasswordController;
use App\Http\Controllers\Auth_Entreprises\NewPasswordController;
use App\Http\Controllers\Auth_Entreprises\VerifyEmailController;
use App\Http\Controllers\Auth_Entreprises\RegisteredUserController;
use App\Http\Controllers\Auth_Entreprises\PasswordResetLinkController;
use App\Http\Controllers\Auth_Entreprises\ConfirmablePasswordController;
use App\Http\Controllers\Auth_Entreprises\AuthenticatedSessionController;
use App\Http\Controllers\Auth_Entreprises\EmailVerificationPromptController;
use App\Http\Controllers\Auth_Entreprises\EmailVerificationNotificationController;

Route::middleware('guest:entreprise')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
                ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
                ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
                ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
                ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
                ->name('password.store');
});

Route::middleware('entreprise')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
                ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1'])
                ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
                ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');

    Route::post('close/{offre}', [OffreController::class,"close"])->name("close");
});
