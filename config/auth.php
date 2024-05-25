<?php

return [

    'defaults' => [
        'guard' => 'web',
        'passwords' => 'users',
    ],

    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],
        'candidat' => [
            'driver' => 'session',
            'provider' => 'candidats',
        ],
        'entreprise' => [
            'driver' => 'session',
            'provider' => 'entreprises',
        ],
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\Models\User::class,
        ],
        'candidats' => [
            'driver' => 'eloquent',
            'model' => App\Models\Candidat::class,
        ],
        'entreprises' => [
            'driver' => 'eloquent',
            'model' => App\Models\Entreprise::class,
        ],
    ],

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],
        'candidats' => [
            'provider' => 'candidats',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],
        'entreprises' => [
            'provider' => 'entreprises',
            'table' => 'password_reset_tokens',
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    'password_timeout' => 10800,

];
