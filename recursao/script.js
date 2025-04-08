
// 01 - Dado um array que pode conter números e subarrays, implemente uma função
// recursiva que percorra o array e retorne a soma de todos os números. Não utilize loops.
console.log("QUESTAO 1")

let array = [2, 74, [3, 7, 1], 9, [[2, [2, 75,2,5]]]];



function somaArrayAninhado(arr){
    let resultado =0;

    // com loop
    for (let i = 0; i < arr.length; i++) {

        if(Array.isArray(arr[i])){
            resultado+= somaArrayAninhado(arr[i]);
        }
        else if(typeof arr[i]=== 'number'){
            resultado+= arr[i];
        }
    }

    //sem loop
    // return  arr.reduce((acc, item)=> {

    //     if(Array.isArray(item)){
    //         return acc + somaArrayAninhado(item);

    //     }else if(typeof item === 'number'){
    //         return acc + item;
    //     }
    // }, 0)

    return resultado;

}


console.log(somaArrayAninhado(array))


//Crie uma função que receba duas funções como argumento e retorne uma nova
//função que é a composição das duas.
console.log("QUESTAO 2")

function composicao(f, g){
    return function(x){
        return f(g(x))
    }
}

function dobro(x){
    return x*2
}

function quadrado(x){
    return x**2
}

let dobroDoQuadrado = composicao(dobro, quadrado)
console.log(dobroDoQuadrado(3))



//Implemente uma função que gera uma sequência numérica crescente com base em um
// número inicial e um passo, ambos passados como parâmetros. Use closures para manter
// o estado da sequência.

console.log("QUESTAO 3")

function gerarSequencia(inicio, passo){
    let valor = inicio-passo;
    return function(){
        valor += passo;
        return valor;
    }

}

let seq = gerarSequencia(1, 3)
console.log(seq());
console.log(seq());
console.log(seq());
console.log(seq());
console.log(seq());
console.log(seq());


// Crie uma função que aceite um número e retorne uma nova função que também aceita
// um número. O produto dos dois números deve ser retornado.
console.log("QUESTAO 4")

function multiplicar(x){
    return function(y){

        return x*y;

    }
}


let multiplicarPorDez = multiplicar(10);
console.log(multiplicarPorDez(3))

// Escreva uma função recursiva que percorra todos os elementos do DOM e retorne
// uma lista com os textos de todos os elementos <p>. Não utilize loops.

function percorrerDOm(){
    let textos = [];

    if(elemento.tagName.toLoweCase() === 'p'){ //se n for p n faz nada

        textos = textos.concat(elemento.textContent); //nao alterna o original, retorna a copia alterada

    }                                                   
    let filhos = elemento.children;

    //com loop
    for (let i = 0; i < filhos.length; i++) {
        textos = textos.concat(percorrerDOm(filhos[i]));
        
    }


}



