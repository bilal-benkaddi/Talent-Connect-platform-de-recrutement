<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;

class Candidat extends Model implements Authenticatable
{
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
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
