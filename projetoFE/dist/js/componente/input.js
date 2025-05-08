import { criarElemento } from "../util.js";
import label from "./label.js";
const input = (texto, tipo = "text") => {
    const container = criarElemento('div');
    const input = criarElemento('input');
    input.placeholder = "digite o nrm do seu cartao";
    input.type = tipo;
    input.id = Math.random().toString(36).substring(2, 15);
    const labelElemento = label(texto);
    labelElemento.htmlFor = input.id; //conexao por id
    container.appendChild(labelElemento);
    container.appendChild(input);
    return container;
};
export default input;
