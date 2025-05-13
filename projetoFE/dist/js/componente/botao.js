import { criarElemento } from "../util.js";
class Botao {
    elemento;
    constructor(texto, tipo) {
        this.elemento = criarElemento("button", texto);
        this.elemento.type = tipo || "button";
    }
    getElemento() {
        return this.elemento;
    }
}
export default Botao;
