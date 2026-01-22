console.log("====== Ejercicio 5: Arrays de interfaces ======");

// Array con al menos tres productos
// Recorre el array y muestra el nombre y precio de cada producto
// Calcula y muestra el precio total
const productos = [
  { id: 1, nombre: "Teclado", precio: 50 },
  { id: 2, nombre: "Ratón", precio: 15 },
  { id: 3, nombre: "Monitor", precio: 180 },
  { id: 4, nombre: "Auriculares", precio: 35 }
];

console.log("\nProductos disponibles:");
let total = 0;
productos.forEach((p) => {
  console.log(`  - ${p.nombre}: ${p.precio}€`);
  total += p.precio;
});

console.log("\nPrecio total de todos los productos:", total, "€");
