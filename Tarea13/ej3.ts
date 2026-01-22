function saludar(nombre?: string): void {
  if (nombre) {
    console.log(`Hola, ${nombre}`);
  } else {
    console.log("Hola, invitado");
  }
}

console.log("====== Ejercicio 3: Parámetros opcionales ======");

saludar("Alex");
saludar("Jesus");
saludar(); 
