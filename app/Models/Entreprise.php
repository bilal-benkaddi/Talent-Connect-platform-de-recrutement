<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Entreprise extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasFactory, SoftDeletes,AuthenticatableTrait;
    protected $fillable = [
        'nom_Entreprise',
        "logo",
        'secteur',
        'adresse',
        'code_postal',
        'ville',
        'Pays',
        'telephone',
        'email',
        "hr_email",
        'password',
        'site_web',
        'registre_decommerce',
        "hr_nom"
    ];
    public function offreEmplois(){
        return $this->hasMany(Offre::class);
    }
    protected $guard = "entreprise";
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
