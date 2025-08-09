"use strict";
class Cancion {
    constructor(titulo, genero, autor) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
    }
    mostrarDatos() {
        return `
      <strong>Título:</strong> ${this.titulo} <br>
      <strong>Género:</strong> ${this.genero} <br>
      <strong>Autor:</strong> ${this.autor}
    `;
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const miCancion = new Cancion("Despacito", "Reguetón", "Luis Fonsi");
    const infoDiv = document.getElementById("info");
    if (infoDiv) {
        infoDiv.innerHTML = miCancion.mostrarDatos();
    }
});
//# sourceMappingURL=cancion.js.map