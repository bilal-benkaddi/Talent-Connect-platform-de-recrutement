<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Offre extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = [
        'entreprise_id',
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
