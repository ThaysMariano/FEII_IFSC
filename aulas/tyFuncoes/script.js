"use strict";
//npm init -y
//npm install typescript
//no package.json adicionar 
//  "scripts": {
//    "tsc": "tsc -w"
// }
//npm run tsc
//Slides ty parte 3 exercicios
//01
const primeiroEL = (array) => array[0]; //mlr
const primeiroElemento = (array) => array[0];
const ex = (a) => {
    if (typeof a === 'string') {
        return `Sua entrada é uma String: ${a}`;
    }
    else {
        return `Sua entrada é um numero: ${a} `;
    }
};
console.log(ex(12));
console.log(ex("OI"));
