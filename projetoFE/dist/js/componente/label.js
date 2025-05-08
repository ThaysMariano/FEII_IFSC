import { criarElemento } from "../util.js";
const label = (texto) => {
    const label = criarElemento('label', texto);
    return label;
};
export default label;
