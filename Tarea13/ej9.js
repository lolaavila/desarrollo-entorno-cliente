console.log("====== Ejercicio 9: Uso de unknown ======");

function toUpperSeguro(valor) {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  } else {
    throw new Error("El valor no es un texto");
  }
}

console.log("\nProbando con textos:");
try {
  console.log(toUpperSeguro("hola"));
  console.log(toUpperSeguro("typescript"));
} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
  }
}

console.log("\nProbando con valores que no son textos:");
try {
  console.log(toUpperSeguro(123));
} catch (error) {
  if (error instanceof Error) {
    console.error("Error capturado:", error.message);
  }
}

try {
  console.log(toUpperSeguro(true));
} catch (error) {
  if (error instanceof Error) {
    console.error("Error capturado:", error.message);
  }
}
