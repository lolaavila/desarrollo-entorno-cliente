console.log("====== Ejercicio 8: Manejo de errores ======");

function doblarPositivo(n: number): number {
  if (n < 0) {
    throw new Error("El número no puede ser negativo");
  }
  return n * 2;
}

// Llamadas con try/catch
console.log("\nProbando con valores correctos:");
try {
  console.log("Doble de 5:", doblarPositivo(5));
  console.log("Doble de 8:", doblarPositivo(8));
} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
  }
}

console.log("\nProbando con valores incorrectos:");
try {
  console.log("Doble de -3:", doblarPositivo(-3));
} catch (error) {
  if (error instanceof Error) {
    console.error("Error capturado:", error.message);
  }
}
