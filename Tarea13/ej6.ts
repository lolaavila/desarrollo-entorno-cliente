console.log("====== Ejercicio 6: Clases y encapsulación ======");

class Persona {
  public nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse(): void {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona("Lola", 19);
const persona2 = new Persona("Alex", 21);

persona1.presentarse();
persona2.presentarse();
