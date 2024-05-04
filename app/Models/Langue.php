<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Langue extends Model
{
    use HasFactory;
    protected $fillable = [
        "candidat_id",
        "langue",
        "niveau_langue"
    ];
}
