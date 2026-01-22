// Interfaz Producto
interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

console.log("====== Ejercicio 4: Interfaces como tipo ======");

let productoCorrecto: Producto = {
  id: 1,
  nombre: "Teclado",
  precio: 25.99
};

console.log("Producto correcto:", productoCorrecto);

