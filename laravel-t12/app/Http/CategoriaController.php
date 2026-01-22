<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pelicula;

class CategoriaController extends Controller
{
    // Devuelve películas de una categoría en formato JSON
    public function peliculas($id)
    {
        $peliculas = Pelicula::with('categoria')
                     ->where('categoria_id', $id)
                     ->get();
        return response()->json($peliculas);
    }
}