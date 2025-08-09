class Cancion {
  titulo: string;
  genero: string;
  autor: string;

  constructor(titulo: string, genero: string, autor:string) {
    this.titulo = titulo;
    this.genero = genero;
    this.autor = autor;
  }

  mostrarDatos(): string {
    return `
      <strong>Título:</strong> ${this.titulo} <br>
      <strong>Género:</strong> ${this.genero} <br>
      <strong>Autor:</strong> ${this.autor}
    `;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const miCancion = new Cancion("Despacito", "Reguetón","Luis Fonsi");

  const infoDiv = document.getElementById("info");
  if (infoDiv) {
    infoDiv.innerHTML = miCancion.mostrarDatos();
  }
});
