<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;
    protected $fillable = [
        "candidat_id",
        "cerificate",
        "nom_certificate",
        "date_obtenation_certificate"
    ];
}
