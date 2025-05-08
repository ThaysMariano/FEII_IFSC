const renderizar = (elemento) => {
    const root = document.querySelector('#root');
    root.appendChild(elemento);
};
const criarElemento = (tag, conteudo = "") => {
    const elemento = document.createElement(tag);
    elemento.innerHTML = conteudo;
    return elemento;
};
export { renderizar, criarElemento };
