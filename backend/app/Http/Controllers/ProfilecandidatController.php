<?php

namespace App\Http\Controllers;

use App\Models\Profilecandidat;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class ProfilecandidatController extends Controller
{
    public function index(): Collection
    {
        return Profilecandidat::all();
    }
    public function store(Request $request)
    {
        //
    }
    public function show(Profilecandidat $profilecandidat)
    {
        return $profilecandidat;
    }
    public function update(Request $request, Profilecandidat $profilecandidat)
    {
        //
    }
    public function destroy(Profilecandidat $profilecandidat)
    {
        //
    }
}
