<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diplome extends Model
{
    use HasFactory;
    protected $fillable = [
        "candidat_id",
        "diplome",
        "etablissement",
        "date_obtenation_diplome",
    ];
}
