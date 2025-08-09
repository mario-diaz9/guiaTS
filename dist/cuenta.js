"use strict";
class Cuenta {
    constructor(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    depositar() {
        if (this.cantidad < 5) {
            return "El valor a depositar debe ser mayor a $5.00";
        }
        else {
            return `Se ha depositado correctamente $${this.cantidad.toFixed(2)}`;
        }
    }
    retirar(valor) {
        if (valor < 5) {
            return "El valor a retirar debe ser mayor a $5.00";
        }
        if (valor > this.cantidad) {
            return "No hay suficiente dinero en la cuenta";
        }
        this.cantidad -= valor;
        return `Ha retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`;
    }
    mostrarDatos() {
        return `
      <p><strong>Nombre:</strong> ${this.nombre}</p>
      <p><strong>Tipo de cuenta:</strong> ${this.tipoCuenta}</p>
      <p><strong>Número de cuenta:</strong> ${this.numeroCuenta}</p>
      <p><strong>Saldo actual:</strong> $${this.cantidad.toFixed(2)}</p>
    `;
    }
}
let cuenta = null;
const form = document.getElementById('formCuenta');
const resultadoDiv = document.getElementById('resultado');
const accionesDiv = document.getElementById('acciones');
const mostrarDatosBtn = document.getElementById('mostrarDatosBtn');
const depositarBtn = document.getElementById('depositarBtn');
const retirarBtn = document.getElementById('retirarBtn');
const valorRetiroInput = document.getElementById('valorRetiro');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const tipoCuenta = document.getElementById('tipoCuenta').value.trim();
    const numeroCuenta = document.getElementById('numeroCuenta').value.trim();
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    cuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);
    resultadoDiv.innerHTML = "Cuenta creada correctamente.";
    accionesDiv.classList.remove('d-none');
});
mostrarDatosBtn.addEventListener('click', () => {
    if (!cuenta)
        return;
    resultadoDiv.innerHTML = cuenta.mostrarDatos();
});
depositarBtn.addEventListener('click', () => {
    if (!cuenta)
        return;
    const mensaje = cuenta.depositar();
    resultadoDiv.innerHTML = mensaje;
});
retirarBtn.addEventListener('click', () => {
    if (!cuenta)
        return;
    const valor = parseFloat(valorRetiroInput.value);
    if (isNaN(valor)) {
        resultadoDiv.innerHTML = "Ingrese un valor válido para retirar.";
        return;
    }
    const mensaje = cuenta.retirar(valor);
    resultadoDiv.innerHTML = mensaje;
    valorRetiroInput.value = '';
});
//# sourceMappingURL=cuenta.js.map