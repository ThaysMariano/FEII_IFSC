//let soma = 3 + [1].toString();

let soma = 3 + [1][0]; //[1][0] pega o primeiro elemento do array q é o  1
console.log(soma);  //imprime 31

let objeto = {propriedade: "valor"};
console.log(objeto.propriedade) //undefined - n existe mas roda

function funcao(n: number){
    return n / 2;
}

console.log(funcao(1));