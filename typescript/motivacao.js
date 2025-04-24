const { devNull } = require("os");

let soma = 3 + [1];
console.log(soma);  //imprime 31

let objeto = {};
console.log(objeto.propriedade) //undefined - n existe mas roda

function funcao(n){
    return n/2;
}

console.log(funcao('a'));