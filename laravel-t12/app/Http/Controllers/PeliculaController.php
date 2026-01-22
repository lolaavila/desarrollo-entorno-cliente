<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pelicula;

class PeliculaController extends Controller
{
    // Muestra la vista principal
    public function portada()
    {
        return view('peliculas.portada');
    }

    // Devuelve todas las películas en formato JSON
    public function list()
    {
        $peliculas = Pelicula::with('categoria')->get();
        return response()->json($peliculas);
    }
}