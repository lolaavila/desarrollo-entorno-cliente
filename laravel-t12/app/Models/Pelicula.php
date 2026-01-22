<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pelicula extends Model
{
    use HasFactory;

    // Campos que se pueden asignar masivamente
    protected $fillable = [
        'nombre',
        'categoria_id',
        'imagen',
        'url_imdb',
    ];

    // Relación: una película pertenece a una categoría
    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }
}