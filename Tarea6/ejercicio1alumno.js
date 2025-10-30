/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================


   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar


   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/


// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================


function ejercicio1() {
    // TODO: Crear un objeto estudiante con las siguientes propiedades:
    // - nombre: "María"
    // - apellidos: "García López"
    // - edad: 20
    // - curso: "2º DAW"
    // - mostrarInfo: function() que retorne HTML con toda la información
    // TODO: Completar las propiedades del objeto
    // TODO: Retornar HTML con la información del estudiante
    // Sugerencia: usar template strings o concatenación
    // TODO: Mostrar el resultado en el DOM
    // Pista: usar document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
    var estudiante = {
        nombre: "María",
        apellidos: "García López",
        edad: 20,
        curso: "2º DAW",


        mostrarInfo: function () {
            return '' + '<h5>Información del Estudiante:</h5>' +
                '<p><strong>Nombre:</strong> ' + this.nombre + '</p>' +
                '<p><strong>Apellidos:</strong> ' + this.apellidos + '</p>' +
                '<p><strong>Edad:</strong> ' + this.edad + '</p>' +
                '<p><strong>Curso:</strong> ' + this.curso + '</p>';
        },
    };
    document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();


}


// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================


// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    // TODO: Obtener el valor del input con id "color-input"
    var nuevoColor = document.getElementById("color-input").value;
    // TODO: Agregar el color al array usando push()
    colores.push(nuevoColor);
    // TODO: Limpiar el input
    document.getElementById("color-input").value = "";
    // TODO: Mostrar mensaje de confirmación
    document.getElementById("resultado-ej2").innerHTML =
        "<div class='alert alert-success'>Color " + nuevoColor + " agregado.</div>";
}

function eliminarUltimoColor() {
    // TODO: Eliminar el último elemento del array usando pop()
    var colorEliminado = colores.pop();
    // TODO: Mostrar mensaje indicando qué color se eliminó
    document.getElementById("resultado-ej2").innerHTML =
        "<div class='alert alert-info'>Color " + colorEliminado + " eliminado.</div>";
    // TODO: Si el array está vacío, mostrar mensaje apropiado
    if (colores.length === 0) {
        document.getElementById("resultado-ej2").innerHTML +=
            "<div class='alert alert-warning'>El array de colores está vacío.</div>";
    }
}

function mostrarColores() {
    // TODO: Mostrar todos los colores del array
    // TODO: Crear HTML con la lista de colores
    // Sugerencia: usar un bucle for para crear la lista

    var html = "<h5>Lista de Colores:</h5><ul>";
    // TODO: Completar el bucle para mostrar los colores
    for (var i = 0; i < colores.length; i++) {
        html += "<li>" + colores[i] + "</li>";
    }
    html += "</ul>";
    document.getElementById("resultado-ej2").innerHTML = html;
}


// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    productos = [
        { nombre: "Macarrones", precio: 2.5, categoria: "Alimentacion" },
        { nombre: "Huevos", precio: 3, categoria: "Alimentacion" },
        { nombre: "Pollo", precio: 5, categoria: "Carne" },
        { nombre: "Salmon", precio: 5, categoria: "Pescado" },
        { nombre: "Arroz", precio: 3, categoria: "Alimentacion" },
        { nombre: "Azucar", precio: 1.8, categoria: "Especias" },
        { nombre: "Sal", precio: 2, categoria: "Especias" },
        { nombre: "Vino", precio: 150, categoria: "Alimentacion" },
        { nombre: "Cafe", precio: 2.6, categoria: "Alimentacion" },
        { nombre: "Leche", precio: 3, categoria: "Alimentacion" }
    ];
    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    productos.sort(function (a, b) {
        return a.precio - b.precio;
    });
    mostrarProductos(productos);
}

function filtrarProductosCaros() {
    // Filtrar productos con precio mayor a 140€
    var productosCaros = productos.filter(function (producto) {
        return producto.precio > 150;
    });

    mostrarProductos(productosCaros);
}

function mostrarProductos(arrayProductos) {
    var html = "";

    arrayProductos.forEach(function(producto) {
        html += `
            <div style="border:1px solid #ccc; padding:10px; margin:5px; border-radius:5px; width:200px; display:inline-block;">
                <h3>${producto.nombre}</h3>
                <p>Precio: €${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
            </div>
        `;
    });

    document.getElementById("resultado-ej3").innerHTML = html;
}


// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Carlos Ruiz",
    notas: [],
    mensaje: "", // Para mostrar mensajes en la página

    agregarNota: function (nota) {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            this.mensaje = `Nota ${nota} agregada correctamente.`;
        } else {
            this.mensaje = "La nota debe estar entre 0 y 10.";
        }
    },

    calcularPromedio: function () {
        if (this.notas.length === 0) return 0;
        let suma = this.notas.reduce((acc, n) => acc + n, 0);
        let promedio = suma / this.notas.length;
        return promedio.toFixed(2); 
    },

mostrarNotas: function () {
    if (this.notas.length === 0) return "<p>No hay notas registradas.</p>";
    let html = "<ul class='list-group mb-2'>";
    this.notas.forEach((nota, i) => {
        html += `<li class='list-group-item'>Nota ${i + 1}: ${nota}</li>`;
    });
    html += "</ul>";
    return html; // 🔹 Ya NO muestra el promedio aquí
}
};
// Funciones para interactuar con el DOM
function agregarNota() {
    let input = document.getElementById("nota-input");
    let valor = input.value.trim();
   
    if (valor === "") {
        estudianteNotas.mensaje = "Es necesario introducir una nota.";
        actualizarResultado();
        return;
    }

    valor = Number(valor);
    estudianteNotas.agregarNota(valor);
    input.value = ""; // limpiar input
    actualizarResultado();
}

function calcularPromedio() {
    let promedio = estudianteNotas.calcularPromedio();
    let resultadoDiv = document.getElementById("resultado-ej4");
    resultadoDiv.innerHTML = `<p><strong>Promedio:</strong> ${promedio}</p>`;
}

function mostrarNotasEstudiante() {
    let resultadoDiv = document.getElementById("resultado-ej4");
    resultadoDiv.innerHTML = estudianteNotas.mostrarNotas();
}

// Función para actualizar todo en el div (mensaje + notas + promedio)
function actualizarResultado() {
    let resultadoDiv = document.getElementById("resultado-ej4");
    let html = "";
    if (estudianteNotas.mensaje) {
        html += `<p>${estudianteNotas.mensaje}</p>`;
    }
    html += estudianteNotas.mostrarNotas();
    resultadoDiv.innerHTML = html;
}

document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);


// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // TODO: Crear array con al menos 6 objetos empleado
    // Cada empleado: nombre, departamento, salario, antiguedad
    empleados = [
        { nombre: "Hernández, Manuel", departamento: "Ventas", salario: 2730, antiguedad: 3 },
        { nombre: "Ruiz, María", departamento: "Marketing", salario: 3370, antiguedad: 5 },
        { nombre: "Segovia, Fermín", departamento: "IT", salario: 3850, antiguedad: 7 },
        { nombre: "Narváez, Julio", departamento: "IT", salario: 2350, antiguedad: 4 },
        { nombre: "Zurita, Laura", departamento: "Recursos Humanos", salario: 2500, antiguedad: 5 },
        { nombre: "Fernández, Irene", departamento: "IT", salario: 3500, antiguedad: 3 },
        { nombre: "López, Pablo", departamento: "Ventas", salario: 2870, antiguedad: 2 },
        { nombre: "Garrido, Celia", departamento: "Marketing", salario: 3200, antiguedad: 4 },
        { nombre: "Ubago, Francisco Javier", departamento: "Recursos Humanos", salario: 2500, antiguedad: 5 }
    ];

    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    // TODO: Obtener el departamento del input
    // TODO: Filtrar empleados por departamento
    // TODO: Mostrar los resultados
    var departamento = document.getElementById("input-departamento").value.trim(); // TODO: Obtener del input
    var empleadosDepto = empleados.filter(emp =>
        emp.departamento.toLowerCase() === departamento.toLowerCase()
    ); // TODO: Implementar filtro

    if (empleadosDepto.length === 0) {
        document.getElementById("resultado-ej5").innerHTML = `<p>No se encontraron empleados en el departamento "${departamento}".</p>`;
    } else {
        mostrarEmpleados(empleadosDepto);
    }
}

function filtrarSalarioAlto() {
    // TODO: Filtrar empleados con salario > 3000€
    var empleadosAltoSalario = empleados.filter(emp => emp.salario > 3000); // TODO: Implementar filtro

    mostrarEmpleados(empleadosAltoSalario);
}

function mostrarEmpleados(arrayEmpleados) {
    // TODO: Mostrar empleados en formato HTML
    // Incluir nombre, departamento, salario

    var html = "";
    // TODO: Crear HTML para cada empleado

    if (arrayEmpleados.length === 0) {
        html = "<p>No hay empleados para mostrar.</p>";
    } else {
        html = "<ul class='list-group'>";
        arrayEmpleados.forEach(emp => {
            html += `
                <li class='list-group-item'>
                    <strong>${emp.nombre}</strong><br>
                    Departamento: ${emp.departamento}<br>
                    Salario: €${emp.salario}<br>
                    Antigüedad: ${emp.antiguedad} años
                </li>
            `;
        });
        html += "</ul>";
    }

    document.getElementById("resultado-ej5").innerHTML = html;
}


// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    // TODO: Usar splice para eliminar elementos del medio
    // TODO: Mostrar qué elementos se eliminaron
    // TODO: Mostrar el array resultante
    var eliminadas = ciudades.splice(2, 2);

    var html = "<h5>Elementos eliminados con splice:</h5>" + eliminadas.join(", ");
    html += "<br><strong>Array resultante:</strong> " + ciudades.join(", ");

    document.getElementById("resultado-ej6").innerHTML = html;
}

function extraerConSlice() {
    // TODO: Usar slice para extraer una porción del array
    // TODO: Mostrar la porción extraída
    // TODO: Mostrar que el array original no se modifica
    var porcion = ciudades.slice(1, 4);

    var html = "<h5>Porción extraída con slice:</h5>" + porcion.join(", ");
    html += "<br><strong>Array original sin modificar:</strong> " + ciudades.join(", ");

    document.getElementById("resultado-ej6").innerHTML = html;
}

function buscarMadrid() {
    // TODO: Usar find() para buscar "Madrid"
    // TODO: Usar indexOf() para encontrar su posición
    // TODO: Mostrar los resultados
    var encontrada = ciudades.find(ciudad => ciudad === "Madrid");
    var posicion = ciudades.indexOf("Madrid");

    var html = "";
    if (encontrada) {
        html = `<h5>Resultado de la búsqueda:</h5>
                Ciudad encontrada: ${encontrada}<br>
                Posición en el array: ${posicion}`;
    } else {
        html = "<p>Madrid no se encuentra en el array.</p>";
    }
    document.getElementById("resultado-ej6").innerHTML = html;
}


// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo
function Vehiculo(marca, modelo, año) {
    // TODO: Asignar propiedades usando this
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0;

    // TODO: Crear método acelerar() que incremente la velocidad
    this.acelerar = function () {
        this.velocidad += 10;
    };

    // TODO: Crear método mostrarInfo() que retorne información
    this.mostrarInfo = function () {
        return `${this.marca} ${this.modelo} (${this.año}) - Velocidad: ${this.velocidad} km/h`;
    };
}

var vehiculos = [];

function crearVehiculos() {
    // TODO: Crear varios objetos usando el constructor
    // TODO: Agregar al array vehiculos
    vehiculos = [
        new Vehiculo("Toyota", "Corolla", 2020),
        new Vehiculo("Ford", "Focus", 2018),
        new Vehiculo("Tesla", "Model 3", 2022),
        new Vehiculo("BMW", "X5", 2019),
        new Vehiculo("Kia", "Sportage", 2021)
    ];

    mostrarInfoVehiculos();
}

function acelerarTodos() {
    // TODO: Llamar al método acelerar() de todos los vehículos
    // TODO: Actualizar la visualización
    vehiculos.forEach(v => v.acelerar());
    mostrarInfoVehiculos();
}

function mostrarInfoVehiculos() {
    // TODO: Mostrar información de todos los vehículos
    var html = "";
    // TODO: Recorrer array y mostrar info de cada vehículo

    if (vehiculos.length === 0) {
        html = "<p>No hay vehículos creados.</p>";
    } else {
        html = "<h5>Información de los vehículos:</h5><ul class='list-group'>";
        vehiculos.forEach(v => {
            html += `<li class='list-group-item'>${v.mostrarInfo()}</li>`;
        });
        html += "</ul>";
    }

    document.getElementById("resultado-ej7").innerHTML = html;
}

document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);


// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    // Crear matriz 3x3 con números aleatorios
    matriz = [];

    for (var i = 0; i < 3; i++) {
        matriz[i] = [];
        for (var j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 9) + 1; // números del 1 al 9
        }
    }

    mostrarMatriz();
}

function sumarDiagonal() {
    var suma = 0;
    for (var i = 0; i < 3; i++) {
        suma += matriz[i][i];
    }
    document.getElementById("resultado-ej8").innerHTML +=
        "<p><strong>Suma de la diagonal principal:</strong> " + suma + "</p>";
}

function mostrarMatriz() {
    var html = "<h5>Matriz 3x3:</h5><table class='table table-bordered text-center'>";

    for (var i = 0; i < 3; i++) {
        html += "<tr>";
        for (var j = 0; j < 3; j++) {
            html += "<td>" + matriz[i][j] + "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("resultado-ej8").innerHTML = html;
}


// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];
var ultimoArrayMostrado = null; // guarda el array que se está mostrando (para sumar/encadenar)


// Crear array con números del 1 al 10
function crearArrayNumeros() {
    numeros = [];
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }

    // por defecto mostramos y guardamos el array original
    mostrarArray("Array original", numeros);
}

// Duplicar los números usando map()
// Si hay un array mostrado, operamos sobre él; si no, sobre `numeros`
function duplicarConMap() {
    if ((numeros.length === 0) && !ultimoArrayMostrado) {
        document.getElementById("resultado-ej9").innerHTML =
            "<div class='text-danger'>Primero debes crear el array de números.</div>";
        return;
    }

    const fuente = ultimoArrayMostrado ? ultimoArrayMostrado : numeros;
    // Nos aseguramos de trabajar con números (por si acaso hay strings)
    var duplicados = fuente.map(function (n) {
        return Number(n) * 2;
    });

    mostrarArray("Números duplicados", duplicados);
}

// Filtrar solo los números pares usando filter()
// Opera sobre el array mostrado si existe, si no sobre `numeros`
function filtrarPares() {
    if ((numeros.length === 0) && !ultimoArrayMostrado) {
        document.getElementById("resultado-ej9").innerHTML =
            "<div class='text-danger'>Primero debes crear el array de números.</div>";
        return;
    }
    const fuente = ultimoArrayMostrado ? ultimoArrayMostrado : numeros;
    var pares = fuente.filter(function (n) {
        return Number(n) % 2 === 0;
    });

    mostrarArray("Números pares", pares);
}

// Sumar todos los números usando reduce()
// Suma el array mostrado (si hay), si no suma `numeros`
function sumarConReduce() {
    if ((numeros.length === 0) && !ultimoArrayMostrado) {
        document.getElementById("resultado-ej9").innerHTML =
            "<div class='text-danger'>Primero debes crear el array de números.</div>";
        return;
    }
    const fuente = ultimoArrayMostrado ? ultimoArrayMostrado : numeros;
    // Nos aseguramos de convertir a Number para evitar concatenaciones
    var suma = fuente.reduce(function (acumulador, valorActual) {
        return Number(acumulador) + Number(valorActual);
    }, 0);

    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success mt-2'>Suma total: <strong>" + suma + "</strong></div>";
}

// Mostrar array en el DOM y guardar el array mostrado
function mostrarArray(titulo, array) {
    // guardamos una copia para evitar aliasing accidental
    ultimoArrayMostrado = Array.isArray(array) ? array.slice() : [];
    var html = "<h6>" + titulo + ":</h6><p>" + ultimoArrayMostrado.join(", ") + "</p>";
    document.getElementById("resultado-ej9").innerHTML = html;
}

// Asignar eventos
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);
});


// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];

function agregarLibro() {
    // TODO: Obtener valores de los inputs
    var titulo = ""; // TODO: Obtener del input
    var autor = ""; // TODO: Obtener del input
    var año = 0; // TODO: Obtener y convertir a número
    var genero = ""; // TODO: Obtener del select
    titulo = document.getElementById("libro-titulo").value.trim();
    autor = document.getElementById("libro-autor").value.trim();
    año = parseInt(document.getElementById("libro-year").value);
    genero = document.getElementById("libro-genero").value;

    // TODO: Validar que todos los campos estén completos
    if (titulo === "" || autor === "" || isNaN(año) || genero === "") {
        document.getElementById("resultado-ej10").innerHTML =
            "<div class='alert alert-danger'>Por favor, completa todos los campos.</div>";
        return;
    }

    // TODO: Crear objeto libro y agregarlo a la biblioteca
    var libro = {
        // TODO: Completar propiedades
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero
    };

    // TODO: Limpiar los inputs
    document.getElementById("libro-titulo").value = "";
    document.getElementById("libro-autor").value = "";
    document.getElementById("libro-year").value = "";
    document.getElementById("libro-genero").value = "";
    // TODO: Mostrar mensaje de confirmación
    // TODO: Actualizar visualización
    biblioteca.push(libro);
    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-success'>Libro '" + titulo + "' agregado a la biblioteca.</div>";
    mostrarBiblioteca();
}

function eliminarLibro(indice) {
    var eliminado = biblioteca.splice(indice, 1);
    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-warning'>Libro '" + eliminado[0].titulo + "' eliminado.</div>";
    mostrarBiblioteca();
}

function mostrarBiblioteca() {
    // TODO: Mostrar todos los libros de la biblioteca
    mostrarLibros(biblioteca);
}

function ordenarPorTitulo() {
    // TODO: Ordenar libros por título alfabéticamente
    // TODO: Implementar sort
    var librosOrdenados = biblioteca.slice(); // Crear copia del array
    librosOrdenados.sort(function (a, b) {
        if (a.titulo < b.titulo) return -1;
        if (a.titulo > b.titulo) return 1;
        return 0;
    });

    mostrarLibros(librosOrdenados);
}

function filtrarPorGenero() {
    // TODO: Obtener género seleccionado
    // TODO: Filtrar libros por género
    var librosFiltrados = []; // TODO: Implementar filter
    var generoSeleccionado = document.getElementById("btn-filtrar-genero").value;

    librosFiltrados = biblioteca.filter(function (libro) {
        return libro.genero === generoSeleccionado;
    });

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    // TODO: Filtrar libros publicados después del 2020
    var recientes = []; // TODO: Implementar filter
    recientes = biblioteca.filter(function (libro) {
        return libro.año > 2020;
    });

    mostrarLibros(recientes);
}

function mostrarLibros(arrayLibros) {
    // TODO: Mostrar libros en formato de tarjetas HTML
    var html = "";

    if (arrayLibros.length === 0) {
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    } else {
        // TODO: Crear HTML para cada libro
    }
    for (var i = 0; i < arrayLibros.length; i++) {
        html += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${arrayLibros[i].titulo}</h5>
                    <p class="card-text"><strong>Autor:</strong> ${arrayLibros[i].autor}</p>
                    <p class="card-text"><strong>Año de Publicación:</strong> ${arrayLibros[i].año}</p>
                    <p class="card-text"><strong>Género:</strong> ${arrayLibros[i].genero}</p>
                    <button class="btn btn-danger btn-sm" onclick="eliminarLibro(${i})">
                            Eliminar libro
                        </button>
                </div>
            </div>
        `;
    }

    document.getElementById("resultado-ej10").innerHTML = html;
}


// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================


document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);


    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);


    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);


    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);


    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);


    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);


    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);


    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);


    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);


    // Ejercicio 10
    // TODO: Añadir event listeners para los botones del ejercicio 10
    //------------------------REVISAR------------------------
    document.getElementById("btn-agregar-libro").addEventListener("click", agregarLibro);
    document.getElementById("btn-mostrar-biblioteca").addEventListener("click", mostrarBiblioteca);
    document.getElementById("btn-ordenar-titulo").addEventListener("click", ordenarPorTitulo);
    document.getElementById("btn-filtrar-genero").addEventListener("click", filtrarPorGenero);
    document.getElementById("btn-libros-recientes").addEventListener("click", librosRecientes);
});


/* ===================================
    FIN DEL ARCHIVO
   
    RECORDATORIO FINAL:
    - Completa cada TODO siguiendo las instrucciones
    - Usa sintaxis tradicional de JavaScript (no ES6+)
    - Testea cada función antes de continuar
    - Todas las salidas deben ir al DOM, no a la consola
    - ¡Practica y diviértete programando!
    ===================================
*/
