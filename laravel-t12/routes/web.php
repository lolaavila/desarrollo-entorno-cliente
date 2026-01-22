<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PeliculaController;
use App\Http\Controllers\CategoriaController;

Route::get('/', [PeliculaController::class, 'portada']); // Vista principal

// Rutas API para AJAX
Route::get('/api/peliculas', [PeliculaController::class, 'list']);
Route::get('/api/categorias/{id}/peliculas', [CategoriaController::class, 'peliculas']);