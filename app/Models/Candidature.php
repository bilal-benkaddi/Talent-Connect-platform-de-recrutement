<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Candidature extends Model
{
    use HasFactory ,SoftDeletes;
    protected $fillable = [
        'offre_id',
        'candidat_id',
        "status",
        "date_de_soumission",
        'cv',
        'lettre_de_motivation',
    ];
    public function offre()
    {
        return $this->belongsTo(Offre::class);
    }
    public function candidat(){
        return $this->belongsTo(Candidat::class);
    }
}
    
