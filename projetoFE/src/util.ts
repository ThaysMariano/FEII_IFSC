const renderizar = (elemento: HTMLElement): void =>{
    const root = document.querySelector('#root');
    root!.appendChild(elemento);
}

const criarElemento = (tag: string, conteudo="")=>{
    const elemento = document.createElement(tag);
    elemento.innerHTML = conteudo;
    return elemento;
}

export{
    renderizar,
    criarElemento
};



