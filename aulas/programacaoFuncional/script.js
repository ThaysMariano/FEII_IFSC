let numeros = [6,4,3,2,1];

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

console.log(aoQaudradoFunc(array));

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

//-----------------------------------------------

//4. Dado um array de números, crie uma função que use map, filter e reduce para
//retornar a soma de todos os números pares elevados ao quadrado.

let numeroParaQst4 = [2, 5, 8, 1]

function numeroParesAoQuadrado(array){
    return array.filter((n)=> n%2==0).map((n)=> n*n).reduce((soma, numero) => soma+=numero);
}

console.log(numeroParesAoQuadrado(numeroParaQst4));

//-----------------------------------------------

//5. Usando as funções de ordem superior, crie uma função que recebe uma lista de strings
//e retorna uma nova lista com todas as strings que possuem mais de 5 caracteres, em
//letras maiúsculas.
let stringsQst5 = ["thays", "mariano", "telefone", "carro"]

function stringsMaioresQueCinco (array) {
    
    //pegar a lista, filtrar maiores que 5 e mapear para uppercase

    return array.filter((string) => string.length>5).map((string) => string.toUpperCase())
}

console.log(stringsMaioresQueCinco(stringsQst5))


//6. Crie uma função que retorna outra função para incrementar um valor por uma
//quantidade fixa. Por exemplo, ao chamar incrementarPor(5), deve retornar uma
//função que, quando chamada, incrementa o valor passado em 5.

const incrementarPor = (valorAdicionado)=>{
    return function adicionar(valorBase) { 
        return valorBase+valorAdicionado
    }
     
}

const aumentarCinco = incrementarPor(5);
const aumentarOito = incrementarPor(8);

const add5 = aumentarCinco(98)
const add8 = aumentarOito(1)

console.log("5: " + add5 + " 8:  " + add8 )

//7. Implemente uma função para calcular o n-ésimo número de Fibonacci usando memoization.

function fibonacciMemo (){
    let cache = [];

    return function fibonacci(n){
        if (n in cache) return cache[n];
        if (n == 1 || n ==0) return 1;
        cache[n] = fibonacci(n-1)+fibonacci(n-2);
        return cache[n];
    }
}

const fib = fibonacciMemo();

console.log(fib(5))

//8. Escreva uma função que calcula a^b(onde a é a base e b é o expoente), usando
//memoization para armazenar os resultados das potenciações anteriores.












