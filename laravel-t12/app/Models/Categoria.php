<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    // Campos que se pueden asignar masivamente
    protected $fillable = ['nombre'];

    // Relación: una categoría tiene muchas películas
    public function peliculas()
    {
        return $this->hasMany(Pelicula::class);
    }
}