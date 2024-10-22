<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Candidature;
use App\Models\Offre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function candidatDashboard()
    {
        if (Auth::guard("candidat")->user()) {
            $candidatures = Candidature::where('candidat_id', Auth::guard("candidat")->user()->id)->get();
        } else {
            $candidatures = null;
        }
        return Inertia::render('Dashboard_candidat', [
            'candidat' => Auth::guard('candidat')->user(),
            'user' => Auth::guard('candidat')->user(),
            'candidatures' => $candidatures,
        ]);
    }

    public function entrepriseDashboard()
    {
        $offresCount = Offre::where('entreprise_id', Auth::guard("entreprise")->user()->id)->count();

        $offres = Offre::where('entreprise_id', Auth::guard("entreprise")->user()->id)
            ->withCount('candidatures')
            ->get();

        // Map the offres array to the format expected by Chart.js
        $xyValues = $offres->map(function ($offre) {
            return ['x' => $offre->id, 'y' => $offre->candidatures_count];
        });

        return Inertia::render('Dashboard_entreprise', [
            'entreprise' => Auth::guard('entreprise')->user(),
            'user' => Auth::guard('entreprise')->user(),
            'offresCount' => $offresCount,
            'offres' => $offres,
            'xyValues' => $xyValues,
        ]);
    }
}
