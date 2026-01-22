<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categoria;
use App\Models\Pelicula;

class PeliculasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Insertar categorías
        $accion = Categoria::create(['nombre' => 'Accion']);
        $comedia = Categoria::create(['nombre' => 'Comedia']);
        $drama = Categoria::create(['nombre' => 'Drama']);
        $terror = Categoria::create(['nombre' => 'Terror']);
        $cienciaFiccion = Categoria::create(['nombre' => 'Ciencia Ficción']);
        $animacion = Categoria::create(['nombre' => 'Animación']);

        // Insertar películas
        $peliculas = [
            // Acción
            [
                'nombre' => 'John Wick',
                'categoria_id' => $accion->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt2911666/',
            ],
            [
                'nombre' => 'Mad Max: Fury Road',
                'categoria_id' => $accion->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt1392190/',
            ],
            [
                'nombre' => 'The Dark Knight',
                'categoria_id' => $accion->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0468569/',
            ],

            // Comedia
            [
                'nombre' => 'The Grand Budapest Hotel',
                'categoria_id' => $comedia->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt2278388/',
            ],
            [
                'nombre' => 'Superbad',
                'categoria_id' => $comedia->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/f8GkzjO6O0yq02SlfSLj5EJYqyd.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0829482/',
            ],
            [
                'nombre' => 'Juno',
                'categoria_id' => $comedia->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/eCGhkq7Y0jvxrYXVVpdK3cBKcwO.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0467406/',
            ],

            // Drama
            [
                'nombre' => 'The Shawshank Redemption',
                'categoria_id' => $drama->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0111161/',
            ],
            [
                'nombre' => 'Forrest Gump',
                'categoria_id' => $drama->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0109830/',
            ],
            [
                'nombre' => 'Gladiator',
                'categoria_id' => $drama->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0172495/',
            ],

            // Terror
            [
                'nombre' => 'The Conjuring',
                'categoria_id' => $terror->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt1457767/',
            ],
            [
                'nombre' => 'Get Out',
                'categoria_id' => $terror->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/1SwAVYpuLj8KsHxllTF8Dt9dSSX.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt5052448/',
            ],

            // Ciencia ficción
            [
                'nombre' => 'Inception',
                'categoria_id' => $cienciaFiccion->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt1375666/',
            ],
            [
                'nombre' => 'Interstellar',
                'categoria_id' => $cienciaFiccion->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0816692/',
            ],
            [
                'nombre' => 'The Matrix',
                'categoria_id' => $cienciaFiccion->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0133093/',
            ],

            // Animación
            [
                'nombre' => 'Toy Story',
                'categoria_id' => $animacion->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt0114709/',
            ],
            [
                'nombre' => 'Spider-Man: Into the Spider-Verse',
                'categoria_id' => $animacion->id,
                'imagen' => 'https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbk.jpg',
                'url_imdb' => 'https://www.imdb.com/title/tt4633694/',
            ],
        ];

        foreach ($peliculas as $pelicula) {
            Pelicula::create($pelicula);
        }

        $this->command->info(string: '¡Películas y categorías insertadas con éxito!');
    }
}
    