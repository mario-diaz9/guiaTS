class Cuenta {
  nombre: string;
  cantidad: number;
  tipoCuenta: string;
  numeroCuenta: string;

  constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }

  depositar(): string {
    if (this.cantidad < 5) {
      return "El valor a depositar debe ser mayor a $5.00";
    } else {
      return `Se ha depositado correctamente $${this.cantidad.toFixed(2)}`;
    }
  }

  retirar(valor: number): string {
    if (valor < 5) {
      return "El valor a retirar debe ser mayor a $5.00";
    }
    if (valor > this.cantidad) {
      return "No hay suficiente dinero en la cuenta";
    }
    this.cantidad -= valor;
    return `Ha retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`;
  }

  mostrarDatos(): string {
    return `
      <p><strong>Nombre:</strong> ${this.nombre}</p>
      <p><strong>Tipo de cuenta:</strong> ${this.tipoCuenta}</p>
      <p><strong>Número de cuenta:</strong> ${this.numeroCuenta}</p>
      <p><strong>Saldo actual:</strong> $${this.cantidad.toFixed(2)}</p>
    `;
  }
}

let cuenta: Cuenta | null = null;

const form = document.getElementById('formCuenta') as HTMLFormElement;
const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;
const accionesDiv = document.getElementById('acciones') as HTMLDivElement;

const mostrarDatosBtn = document.getElementById('mostrarDatosBtn') as HTMLButtonElement;
const depositarBtn = document.getElementById('depositarBtn') as HTMLButtonElement;
const retirarBtn = document.getElementById('retirarBtn') as HTMLButtonElement;
const valorRetiroInput = document.getElementById('valorRetiro') as HTMLInputElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = (document.getElementById('nombre') as HTMLInputElement).value.trim();
  const tipoCuenta = (document.getElementById('tipoCuenta') as HTMLInputElement).value.trim();
  const numeroCuenta = (document.getElementById('numeroCuenta') as HTMLInputElement).value.trim();
  const cantidad = parseFloat((document.getElementById('cantidad') as HTMLInputElement).value);

  cuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);
  resultadoDiv.innerHTML = "Cuenta creada correctamente.";
  accionesDiv.classList.remove('d-none');
});

mostrarDatosBtn.addEventListener('click', () => {
  if (!cuenta) return;
  resultadoDiv.innerHTML = cuenta.mostrarDatos();
});

depositarBtn.addEventListener('click', () => {
  if (!cuenta) return;
  const mensaje = cuenta.depositar();
  resultadoDiv.innerHTML = mensaje;
});

retirarBtn.addEventListener('click', () => {
  if (!cuenta) return;
  const valor = parseFloat(valorRetiroInput.value);
  if (isNaN(valor)) {
    resultadoDiv.innerHTML = "Ingrese un valor válido para retirar.";
    return;
  }
  const mensaje = cuenta.retirar(valor);
  resultadoDiv.innerHTML = mensaje;
  valorRetiroInput.value = '';
});
