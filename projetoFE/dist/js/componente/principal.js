import { criarElemento } from "../util.js";
import formulario from "./formulario.js";
import titulo from "./titulo.js";
const principal = () => {
    const registros = [{
            nome: "ZÉ",
            email: "ze@lele",
            senha: "zeze"
        }, {
            nome: "rosa",
            email: "rosa@gmail",
            senha: "1234"
        }
    ];
    const main = criarElemento("main", "");
    main.appendChild(titulo);
    const listaRegistros = criarElemento("ul");
    const adicionarRegistro = (registro) => {
        registros.push(registro);
        renderizarRegistros();
    };
    const renderizarRegistros = () => {
        listaRegistros.innerHTML = "";
        registros.forEach(registro => {
            const item = criarElemento("li");
            item.innerHTML = `${registro.nome} - ${registro.email}`;
            listaRegistros.appendChild(item);
        });
        main.prepend(listaRegistros);
    };
    renderizarRegistros();
    main.appendChild(formulario(adicionarRegistro));
    return main;
};
export default principal;
