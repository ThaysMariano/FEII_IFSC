import { preProcessFile } from "../../node_modules/typescript/lib/typescript.js";
import { criarElemento } from "../util.js";
import Botao from "./botao.js";
import input from "./input.js";
import { Registro } from "./principal.js";

const formulario = (adicionarRegistro: (reg: Registro)=>void)=>{
    const form = criarElemento('form', 'formulario') as HTMLFormElement;
    form.appendChild(input("Nome"));
    form.appendChild(input("email","text"));
    form.appendChild(input("Senha", "password"))
    const botaoEnviar = new Botao("Enviar", "submit").getElemento();
    form.appendChild(botaoEnviar);
    const botaoLimpar = new Botao("Limpar", "reset").getElemento();
    form.appendChild(botaoLimpar);


    form.addEventListener("submit", e=>{
        e.preventDefault();

        const nome = form[0] as HTMLInputElement;
        const email = form[1] as HTMLInputElement;
        const senha = form[2] as HTMLInputElement;

        const registro: Registro = {
            nome: nome.value,
            email : email.value,
            senha: senha.value
        }

        adicionarRegistro(registro);

    })


    return form;
}

export default formulario;