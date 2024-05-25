<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Candidature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function candidatDashboard () {
        if (Auth::guard("candidat")->user()) {
            $candidatures = Candidature::where('candidat_id', Auth::guard("candidat")->user()->id)->get();
        } else {
            $candidatures = null;
        }
        return Inertia::render('Dashboard_candidat',[
            'candidat' => Auth::guard('candidat')->user(),
            'user' => Auth::guard('candidat')->user(),
            'candidatures' => $candidatures,
        ]);
    }

    public function entrepriseDashboard () {
        return Inertia::render('Dashboard_entreprise',[
            'entreprise' => Auth::guard('entreprise')->user(),
            'user' => Auth::guard('entreprise')->user(),
        ]);
    }
}
