// Interfaz Producto
interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

console.log("====== Ejercicio 5: Arrays de interfaces ======");

const productos: Producto[] = [
  { id: 1, nombre: "Teclado", precio: 50 },
  { id: 2, nombre: "Ratón", precio: 15 },
  { id: 3, nombre: "Monitor", precio: 180 },
  { id: 4, nombre: "Auriculares", precio: 35 }
];

console.log("\nProductos disponibles:");
let total: number = 0;
productos.forEach((p) => {
  console.log(`  - ${p.nombre}: ${p.precio}€`);
  total += p.precio;
});

console.log("\nPrecio total de todos los productos:", total, "€");
