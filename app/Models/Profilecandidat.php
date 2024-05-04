<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profilecandidat extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = [
        'candidats_id',
        'cin',
        'photo',
        'niveau_etude',
    ];
    public function candidat()
    {
        return $this->belongsTo(Candidat::class);
    }

    public function experiences()
    {
        return $this->hasMany(Experience::class);
    }
    public function diplomes()
    {
        return $this->hasMany(Diplome::class);
    }
    public function certificates(){
        return $this->hasMany(Certificate::class);
    }
    public function competences()
    {
        return $this->hasMany(Competence::class);
    }
    public function langues(){
        return $this->hasMany(Langue::class);
    }
}
