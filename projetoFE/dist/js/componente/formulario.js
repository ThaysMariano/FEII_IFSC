import { criarElemento } from "../util.js";
import Botao from "./botao.js";
import input from "./input.js";
const formulario = (adicionarRegistro) => {
    const form = criarElemento('form', 'formulario');
    form.appendChild(input("Nome"));
    form.appendChild(input("email", "text"));
    form.appendChild(input("Senha", "password"));
    const botaoEnviar = new Botao("Enviar", "submit").getElemento();
    form.appendChild(botaoEnviar);
    const botaoLimpar = new Botao("Limpar", "reset").getElemento();
    form.appendChild(botaoLimpar);
    form.addEventListener("submit", e => {
        e.preventDefault();
        const nome = form[0];
        const email = form[1];
        const senha = form[2];
        const registro = {
            nome: nome.value,
            email: email.value,
            senha: senha.value
        };
        adicionarRegistro(registro);
    });
    return form;
};
export default formulario;
