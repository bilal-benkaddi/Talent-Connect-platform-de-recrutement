<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;
    protected $fillable = [
        "candidat_id",
        "date_debut_experience",
        "date_fin_experience",
        "description_experience"];
}
