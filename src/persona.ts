
 abstract class Persona {
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
  edad: number;

  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }

  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  abstract mostrarDatos(): string;
}

 class Empleado extends Persona {
  private sueldo: number = 0;

  cargarSueldo(sueldo: number): void {
    this.sueldo = sueldo;
  }

  imprimirSueldo(): string {
    return `Sueldo: $${this.sueldo.toFixed(2)}`;
  }

  mostrarDatos(): string {
    return `
      <p><strong>Nombre:</strong> ${this.nombre}</p>
      <p><strong>Apellido:</strong> ${this.apellido}</p>
      <p><strong>Dirección:</strong> ${this.direccion}</p>
      <p><strong>Teléfono:</strong> ${this.telefono}</p>
      <p><strong>Edad:</strong> ${this.edad} (${this.esMayorDeEdad() ? 'Mayor de edad' : 'Menor de edad'})</p>
      <p><strong>${this.imprimirSueldo()}</strong></p>
    `;
  }
}

const form = document.getElementById('formEmpleado') as HTMLFormElement;
const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = (document.getElementById('nombre') as HTMLInputElement).value.trim();
  const apellido = (document.getElementById('apellido') as HTMLInputElement).value.trim();
  const direccion = (document.getElementById('direccion') as HTMLInputElement).value.trim();
  const telefono = (document.getElementById('telefono') as HTMLInputElement).value.trim();
  const edad = parseInt((document.getElementById('edad') as HTMLInputElement).value, 10);
  const sueldo = parseFloat((document.getElementById('sueldo') as HTMLInputElement).value);

  const empleado = new Empleado(nombre, apellido, direccion, telefono, edad);
  empleado.cargarSueldo(sueldo);

  resultadoDiv.innerHTML = empleado.mostrarDatos();
});

