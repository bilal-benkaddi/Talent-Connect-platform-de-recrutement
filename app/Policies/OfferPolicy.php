<?php

namespace App\Policies;

use App\Models\Offre;
use App\Models\Entreprise;
use Illuminate\Auth\Access\Response;

class OfferPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(Entreprise $entreprise)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(Entreprise $entreprise, Offre $offre)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(Entreprise $entreprise)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(Entreprise $entreprise, Offre $offre)
    {
        return $entreprise->id == $offre->entreprise_id;
    }


    /**
     * Determine whether the user can delete the model.
     */
    public function delete(Entreprise $entreprise, Offre $offre)
    {
        return $entreprise->id == $offre->entreprise_id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(Entreprise $entreprise, Offre $offre)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(Entreprise $entreprise, Offre $offre)
    {
        //
    }
}
