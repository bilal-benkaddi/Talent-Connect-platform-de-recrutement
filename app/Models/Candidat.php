<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;

class Candidat extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasFactory, SoftDeletes,AuthenticatableTrait;
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
   
    protected $guard = "candidat";
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
