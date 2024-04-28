<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Candidat extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'nom',
        'prenom',
        'date_de_naissance',
        'email',
        'image',
        'password',
        'telephone',
        'Adresse_postale'
    ];
    public function candidatures(){
        return $this->hasMany(Candidature::class);
    }
    public function profile(){
        return $this->hasOne(Profilecandidat::class);
    }
}
