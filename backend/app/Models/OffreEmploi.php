<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OffreEmploi extends Model
{
    use HasFactory;
    protected $fillable = [
        'titre',
        'domaine',
        'niveau_etude',
        'experience',
        'nombre_poste',
        'secteur_activite',
        'type_emploi',
        'lieu',
        'description',
        'date_Publication',
        'date_limite_candidature',
        'salaire',
        'type_contrat',
    ];
    public function entreprise()
    {
        return $this->belongsTo(Entreprise::class);
    }
    public function candidatures()
    {
        return $this->hasMany(Candidature::class);
    }
}
