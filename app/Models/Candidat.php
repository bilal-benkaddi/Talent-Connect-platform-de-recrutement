<?php
namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Candidat extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

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

    public function candidatures()
    {
        return $this->hasMany(Candidature::class);
    }

    public function profile()
    {
        return $this->hasOne(Profilecandidat::class);
    }

    protected $hidden = [
        'password',
        'password_reset_tokens',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
