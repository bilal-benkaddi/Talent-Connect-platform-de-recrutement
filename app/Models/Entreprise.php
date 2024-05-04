<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;

class Entreprise extends Model implements Authenticatable
{
    use HasFactory, SoftDeletes , AuthenticatableTrait;
    protected $fillable = [
        'nom_Entreprise',
        'secteur',
        'adresse',
        'code_postal',
        'ville',
        'Pays',
        'telephone',
        'email',
        'password',
        'site_web',
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
}
