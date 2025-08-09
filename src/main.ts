class CabeceraPagina {
    private titulo: string = "";
    private color: string = "";
    private fuente: string = "";
    private alineacion: "left" | "center" | "right" = "center";


    obtenerPropiedades(titulo: string, color: string, fuente: string): void {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    
    definirAlineacion(alineacion: "left" | "center" | "right"): void {
        this.alineacion = this.alineacion;   
    }

    imprimir(): void{
        const encabezado = document.createElement("h1");
        encabezado.textContent = this.titulo;
        encabezado.style.color = this.color;
        encabezado.style.fontFamily = this.fuente;
        encabezado.style.textAlign = this.alineacion
        
        document.body.appendChild(encabezado);
    }

}

//Uso de la clase
window.addEventListener("DOMContentLoaded", () => {
    const header = new CabeceraPagina();
    header.obtenerPropiedades("Header creado a partir de Typescript", "darkblue", "Arial");
    header.definirAlineacion("center");
    header.imprimir();
});