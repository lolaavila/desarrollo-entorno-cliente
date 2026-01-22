<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de Animes</title>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        /* Estilo general */
        body {
            background-color: #121212;
            color: #fff;
            font-family: 'Segoe UI', sans-serif;
        }

        /* Navbar estilo Crunchyroll */
        .navbar {
            background-color: #f27c00;
            padding: 1rem 2rem;
            font-weight: bold;
        }

        .navbar-brand {
            color: #fff;
            font-size: 1.5rem;
        }

        /* Footer */
        footer {
            background-color: #1e1e1e;
            color: #ccc;
            padding: 15px 0;
            text-align: center;
            margin-top: 50px;
        }

        /* Selector de categorías */
        #categoriaSelect {
            max-width: 300px;
        }

        /* Contenedor de tarjetas */
        .card {
            background-color: #1f1f1f;
            border: none;
            border-radius: 8px;
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
        }

        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 25px rgba(0,0,0,0.5);
        }

        .card img {
            height: 300px;
            object-fit: cover;
            width: 100%;
            transition: transform 0.3s;
        }

        .card img:hover {
            transform: scale(1.05);
        }

        .card-body {
            padding: 10px;
        }

        .card-title {
            font-size: 1.1rem;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .card-text {
            font-size: 0.9rem;
            color: #aaa;
            margin-bottom: 5px;
        }

        .btn-imdb {
            background-color: #f27c00;
            color: #fff;
            font-size: 0.8rem;
        }

        #loading {
            text-align: center;
            font-size: 1.2rem;
            margin: 20px 0;
            font-weight: bold;
            color: #f27c00;
        }

        /* Skeleton */
        .skeleton {
            background: linear-gradient(-90deg, #2a2a2a 0%, #3a3a3a 50%, #2a2a2a 100%);
            background-size: 400% 400%;
            animation: shimmer 1.2s ease-in-out infinite;
        }

        @keyframes shimmer {
            0% { background-position: 100% 0; }
            100% { background-position: -100% 0; }
        }
    </style>
</head>
<body>

<nav class="navbar">
    <a class="navbar-brand" href="#">CrunchyAnime</a>
</nav>

<div class="container mt-4">
    <!-- Selector de categorías -->
    <div class="mb-4 d-flex flex-wrap align-items-center gap-3">
        <label for="categoriaSelect" class="form-label mb-0">Filtrar por categoría:</label>
        <select id="categoriaSelect" class="form-select">
            <option value="0">Todas las categorías</option>
            @foreach(\App\Models\Categoria::all() as $categoria)
                <option value="{{ $categoria->id }}">{{ $categoria->nombre }}</option>
            @endforeach
        </select>
    </div>

    <!-- Indicador de carga -->
    <div id="loading">Cargando...</div>

    <!-- Contenedor de tarjetas -->
    <div id="peliculasContainer" class="row g-3"></div>
</div>

<footer>
    &copy; {{ date('Y') }} CrunchyAnime
</footer>

<script>
    const peliculasContainer = document.getElementById('peliculasContainer');
    const categoriaSelect = document.getElementById('categoriaSelect');
    const loading = document.getElementById('loading');

    // Mostrar skeletons mientras cargan las películas
    function showSkeletons(count = 8) {
        peliculasContainer.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const skeleton = document.createElement('div');
            skeleton.className = 'col-md-3';
            skeleton.innerHTML = `
                <div class="card">
                    <div class="skeleton" style="height:300px;"></div>
                    <div class="card-body">
                        <div class="skeleton" style="height:20px; width:80%; margin-bottom:10px;"></div>
                        <div class="skeleton" style="height:15px; width:50%;"></div>
                    </div>
                </div>
            `;
            peliculasContainer.appendChild(skeleton);
        }
    }

    // Función para obtener películas desde la API
    async function fetchPeliculas(url) {
        try {
            loading.style.display = 'block';
            showSkeletons();
            const res = await fetch(url);
            if (!res.ok) throw new Error('Error al cargar las películas');
            const peliculas = await res.json();
            renderPeliculas(peliculas);
        } catch (error) {
            peliculasContainer.innerHTML = '<div class="text-danger text-center">Error al cargar las películas</div>';
            console.error(error);
        } finally {
            loading.style.display = 'none';
        }
    }

    // Renderizar tarjetas dinámicamente
    function renderPeliculas(peliculas) {
        peliculasContainer.innerHTML = '';
        if (peliculas.length === 0) {
            peliculasContainer.innerHTML = '<div class="text-warning text-center">No se encontraron animes</div>';
            return;
        }

        peliculas.forEach(p => {
            const card = document.createElement('div');
            card.className = 'col-md-3';
            card.innerHTML = `
                <div class="card">
                    <img src="${p.imagen}" alt="${p.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${p.nombre}</h5>
                        <p class="card-text">${p.categoria.nombre}</p>
                        ${p.url_imdb ? `<a href="${p.url_imdb}" target="_blank" class="btn btn-imdb btn-sm">IMDB</a>` : ''}
                    </div>
                </div>
            `;
            peliculasContainer.appendChild(card);
        });
    }

    // Cargar todas las películas al iniciar
    fetchPeliculas('/api/peliculas');

    // Filtrar por categoría
    categoriaSelect.addEventListener('change', () => {
        const id = categoriaSelect.value;
        if (id == 0) {
            fetchPeliculas('/api/peliculas');
        } else {
            fetchPeliculas(`/api/categorias/${id}/peliculas`);
        }
    });
</script>

</body>
</html>