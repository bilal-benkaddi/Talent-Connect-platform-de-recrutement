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
    protected $hidden = [
        'password',
        'password_reset_tokens',
    ];
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
