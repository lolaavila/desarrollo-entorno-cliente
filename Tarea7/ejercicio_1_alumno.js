// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero) 
  function raizCuadrada(numero) {
    if (numero < 0) return 'Error: número negativo';
    return Math.sqrt(numero);
  }

  const res = raizCuadrada(v);

  out.textContent = `Resultado: ${res}`;

});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';

  document.getElementById('out-e2').textContent = 'Implementa la función alerta(mensaje) para mostrar un alert en el navegador.';
  // TODO: implementar alerta(mensaje)
  function alerta(mensaje) {
    alert(mensaje);
  }

  alerta(msg);
});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {

  // TODO: usa new Function para construir y ejecutar una función que sume a y b
  const a = parseInt(document.getElementById('a-e3a').value);
  const b = parseInt(document.getElementById('a-e3b').value);
  const sumar = new Function('a', 'b', 'return a + b;');
  const resultado = sumar(a, b);

  document.getElementById('out-e3').textContent = `Resultado: ${resultado}`;
});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  // TODO: reproduce el ejemplo en el código editando esta función.
  function ejemploHoisting() {
    console.log('Valor de x antes de la declaración:', x);
    var x = 10;
    console.log('Valor de x después de la declaración:', x);
  }

  ejemploHoisting();
  document.getElementById('out-e4').textContent = 'Consulta la consola para ver el efecto del hoisting.';
});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
  const resultado = (function () {
    console.log('Ejecutando IIFE...');
    return 'Valor devuelto por IIFE';
  })();

  document.getElementById('out-e5').textContent = resultado;

});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {

  // TODO: define y usa esa función para devolver el resultado
  const a = parseFloat(document.getElementById('a-e6a').value);
  const b = parseFloat(document.getElementById('a-e6b').value);
  const dividir = function (a, b) {
    return b === 0 ? 'Error: división por cero' : a / b;
  };

  const resultado = dividir(a, b);
  document.getElementById('out-e6').textContent = `Resultado: ${resultado}`;
});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {

  // TODO: implementa una función flecha multiplicar = 
  const a = parseFloat(document.getElementById('a-e7a').value);
  const b = parseFloat(document.getElementById('a-e7b').value);
  const multiplicar = (a, b) => a * b;

  const resultado = multiplicar(a, b);
  document.getElementById('out-e7').textContent = `Resultado: ${resultado}`;
});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {

  // TODO: implementar function saludar
  const invitado = 'invitado';

  
    function saludar(nombre = invitado) {
      return `Hola ${nombre}`;
    }   
    const nombreInput = document.getElementById('a-e8').value;
    const out = document.getElementById('out-e8');
    const resultado = saludar(nombreInput || undefined);
    out.textContent = `Resultado: ${resultado}`;


});

// Ejercicio 9 - Funciones anidadas (plantilla)

  // TODO: implementar función externa e interna
  let contador = 0;
  document.getElementById('run-e9').addEventListener('click', function () {
  const out = document.getElementById('out-e9');

  function externa() {
    contador++;
    function interna() {
      return `interno: ${contador}`;
    }
    return interna();
  }
  out.textContent = externa();
});

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {

  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)
  const texto = document.getElementById('a-e10').value;
  const longitud = texto.length;
  const mayus = texto.toUpperCase();
  const sinEspacios = texto.trim();
  const posicion = texto.indexOf('Mundo');
  const aleatorio = Math.random().toFixed(4);
  const fecha = Date.now();

  const resultado = `
    Longitud: ${longitud}
    Mayúsculas: ${mayus}
    Sin espacios: "${sinEspacios}"
    Posición de "Mundo": ${posicion}
    Número aleatorio: ${aleatorio}
    Fecha actual: ${fecha}
  `;

  document.getElementById('out-e10').textContent = resultado;
});
