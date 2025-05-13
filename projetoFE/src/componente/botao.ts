import { criarElemento } from "../util.js";

class Botao {

    private elemento: HTMLButtonElement;

    constructor(texto:string, tipo?:"submit"| "button"| "reset"){
        this.elemento = criarElemento("button", texto) as HTMLButtonElement;
        this.elemento.type = tipo || "button";
    }

    public getElemento(): HTMLButtonElement{
        return this.elemento;
    }


}

export default Botao;