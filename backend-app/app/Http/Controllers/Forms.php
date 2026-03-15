<?php

namespace App\Http\Controllers;

use App\Models\Programme;
use Illuminate\Http\Request;

class Forms extends Controller
{
    // Méthode pour créer un nouveau programme
    public function create(Request $request)
    {
        $request->validate([
            'titre' => 'required',
            'duree' => 'regex:/^\d{2}:\d{2}$/', // Valide si la durée est au format HH:MM
            'Date' => 'required',
            'Ndesupport' => 'required',
            'category' => 'required',
            'technicien' => 'required',
            'notes' => 'required',
        ]);

        $programme = Programme::create($request->all());

        return response()->json($programme, 201);
    }

    
    // Méthode pour récupérer tous les programmes
    public function index()
    {
        $programmes = Programme::orderBy('Date', 'ASC')->get();
        return response()->json($programmes);
    }
    
}
