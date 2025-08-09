"use strict";
class Persona {
    constructor(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    esMayorDeEdad() {
        return this.edad >= 18;
    }
}
class Empleado extends Persona {
    constructor() {
        super(...arguments);
        this.sueldo = 0;
    }
    cargarSueldo(sueldo) {
        this.sueldo = sueldo;
    }
    imprimirSueldo() {
        return `Sueldo: $${this.sueldo.toFixed(2)}`;
    }
    mostrarDatos() {
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
const form = document.getElementById('formEmpleado');
const resultadoDiv = document.getElementById('resultado');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const edad = parseInt(document.getElementById('edad').value, 10);
    const sueldo = parseFloat(document.getElementById('sueldo').value);
    const empleado = new Empleado(nombre, apellido, direccion, telefono, edad);
    empleado.cargarSueldo(sueldo);
    resultadoDiv.innerHTML = empleado.mostrarDatos();
});
//# sourceMappingURL=persona.js.map