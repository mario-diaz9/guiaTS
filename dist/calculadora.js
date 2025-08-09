"use strict";
class Calculadora {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
    }
    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    factorial(n) {
        if (n < 0)
            throw new Error("No existe el factorial de un número negativo");
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const calc = new Calculadora();
    const form = document.getElementById("calcForm");
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operacionSelect = document.getElementById("operacion");
    const resultadoDiv = document.getElementById("resultado");
    // Deshabilitar Número 2 para factorial
    operacionSelect.addEventListener("change", () => {
        if (operacionSelect.value === "factorial") {
            num2Input.disabled = true;
            num2Input.value = "";
        }
        else {
            num2Input.disabled = false;
        }
    });
    // Manejar cálculo
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operacion = operacionSelect.value;
        try {
            let resultado;
            switch (operacion) {
                case "sumar":
                    resultado = calc.sumar(num1, num2);
                    break;
                case "restar":
                    resultado = calc.restar(num1, num2);
                    break;
                case "multiplicar":
                    resultado = calc.multiplicar(num1, num2);
                    break;
                case "dividir":
                    resultado = calc.dividir(num1, num2);
                    break;
                case "potencia":
                    resultado = calc.potencia(num1, num2);
                    break;
                case "factorial":
                    resultado = calc.factorial(num1);
                    break;
                default:
                    throw new Error("Operación no válida");
            }
            resultadoDiv.className = "alert alert-success mt-4 text-center fw-bold";
            resultadoDiv.innerHTML = `Resultado: ${resultado}`;
        }
        catch (error) {
            resultadoDiv.className = "alert alert-danger mt-4 text-center fw-bold";
            resultadoDiv.innerHTML = `Error: ${error.message}`;
        }
    });
});
//# sourceMappingURL=calculadora.js.map