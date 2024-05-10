<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Entreprise extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;
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
        'remember_token',
    ];
    protected $casts = [
        'verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
