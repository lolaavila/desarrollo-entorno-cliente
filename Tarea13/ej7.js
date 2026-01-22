console.log("====== Ejercicio 7: Clases e interfaces ======");

class EmpleadoEmpresa {
  constructor(id, nombre, sueldoMensual) {
    this.id = id;
    this.nombre = nombre;
    this.sueldoMensual = sueldoMensual;
  }

  calcularSueldoAnual() {
    return this.sueldoMensual * 12;
  }
}

const empleado1 = new EmpleadoEmpresa(1, "Evelyn Garcia", 1500);
const empleado2 = new EmpleadoEmpresa(2, "Jose Valiente", 1800);

console.log(`Empleado: ${empleado1.nombre} - Sueldo anual: ${empleado1.calcularSueldoAnual()}€`);
console.log(`Empleado: ${empleado2.nombre} - Sueldo anual: ${empleado2.calcularSueldoAnual()}€`);
