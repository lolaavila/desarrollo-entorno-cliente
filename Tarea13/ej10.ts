console.log("====== Ejercicio 10: Mini proyecto - Gestión de alumnos ======");

interface Alumno {
  id: number;
  nombre: string;
  notas: number[];
}

class AlumnoApp implements Alumno {
  id: number;
  nombre: string;
  notas: number[];

  constructor(id: number, nombre: string, notas: number[]) {
    this.id = id;
    this.nombre = nombre;
    this.notas = notas;
  }

  calcularMedia(): number {
    const suma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return suma / this.notas.length;
  }

  resumen(): string {
    return `ID: ${this.id} | Alumno: ${this.nombre} | Notas: [${this.notas.join(", ")}] | Media: ${this.calcularMedia().toFixed(2)}`;
  }
}

console.log("\nCreando lista de alumnos...");
const alumnos: AlumnoApp[] = [
  new AlumnoApp(1, "Jesus Ortega", [8, 9, 7]),
  new AlumnoApp(2, "Rafael Truka", [6, 7, 5]),
  new AlumnoApp(3, "Alex Beltran", [9, 9, 10]),
  new AlumnoApp(4, "Esther Ruiz", [7, 8, 8])
];

console.log("\nResumen de cada alumno:");
alumnos.forEach((alumno) => {
  console.log("  " + alumno.resumen());
});

console.log("\nCálculo de la media global...");
const mediaGlobal =
  alumnos.reduce((acc, alumno) => acc + alumno.calcularMedia(), 0) / alumnos.length;

console.log(`Media global de todos los alumnos: ${mediaGlobal.toFixed(2)}`);
console.log(`Total de alumnos: ${alumnos.length}`);
