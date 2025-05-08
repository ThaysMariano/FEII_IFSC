import { criarElemento } from "../util.js";
import input from "./input.js";
const formulario = criarElemento('form', 'formulario');
formulario.appendChild(input("Nome"));
formulario.appendChild(input("Nmr", "number"));
formulario.appendChild(input("CVV", "password"));
export default formulario;
