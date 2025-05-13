import { criarElemento } from "../util.js"
import formulario from "./formulario.js";
import titulo from "./titulo.js";

export interface Registro {
    nome:string;
    email:string;
    senha:string;

}



const principal = ()=>{

    const registros: Registro[] = [{
        nome: "ZÉ",
        email: "ze@lele",
        senha: "zeze"
    },{
        nome: "rosa",
        email: "rosa@gmail",
        senha: "1234"
    }
];


    const main = criarElemento("main", "") as HTMLDivElement;
    main.appendChild(titulo)


    const listaRegistros = criarElemento("ul") as HTMLUListElement;

    const adicionarRegistro=(registro: Registro)=>{
        registros.push(registro);
        renderizarRegistros();
    }

    const renderizarRegistros = ()=>{
        listaRegistros.innerHTML = "";
        registros.forEach(registro => {
            const item = criarElemento("li") as HTMLLIElement;
            item.innerHTML = `${registro.nome} - ${registro.email}`
            listaRegistros.appendChild(item);
        })
        main.prepend(listaRegistros);
    }

    renderizarRegistros();
    main.appendChild(formulario(adicionarRegistro));


    return main;
}

export default principal;
