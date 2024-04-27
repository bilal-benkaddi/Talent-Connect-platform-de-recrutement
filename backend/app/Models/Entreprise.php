<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Entreprise extends Model
{
    use HasFactory, SoftDeletes;
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
}
