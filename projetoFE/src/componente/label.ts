import { criarElemento } from "../util.js";

const label = (texto:string)=>{
    const label = criarElemento('label', texto);
    return label;
}


export default label;
