let numeros = [5,4,3,2,1];

console.log(numeros);

numeros.sort((a, b)=> a-b);

console.log(numeros);


//...args -> 0 ou mais argumentos

const sort = (a, ...args) =>{
    const b = [...a];
    return b.sort(...args);
}

const funcaoOrdenacao = (a,b)=> a - b;

const numOrdenados = sort(numeros, (a,b)=> a- b);

console.log(numeros);
console.log(numOrdenados);


//-----------------------------------------------------------------------

let array = [2, 3, 4, 5]

//imperativo puro

function aoQuadrado (array){

    let quadrados = [];
    for (let i= 0; i< array.length; i++) {
        quadrados[i].push(array[i] ** 2);
    }

    return quadrados;
}

//funcional pura

function aoQaudradoFunc (array){
    return array.map(n => n **2)
}


//

const produtos = [
    {nome : "sabonete",
    preco : 3 
    },
    {
        nome: "detergente",
        preco: 5
    },
    {
        nome: "pichanha",
        preco: 90 
    }
];


//esta criando um nome array com o nome e preco * 1.1
const aumentarPreco = itens =>{
    return itens.map(item => {
        return {
            nome : item.nome,
            preco : (item.preco * 1.1).toFixed(2)
        }
    })
}

console.log(aumentarPreco(produtos));

//----------------------------------------------
const maiorElemento = array =>
    array.reduce((maior, numero) => numero > maior ? numero : maior);


console.log(maiorElemento(numeros));







