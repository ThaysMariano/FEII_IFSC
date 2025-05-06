//npm init -y
//npm install typescript
//no package.json adicionar 
//  "scripts": {
//    "tsc": "tsc -w"
// }
//npm run tsc
//Slides ty parte 3 exercicios
//01
var primeiroEL = function (array) { return array[0]; }; //mlr
var primeiroElemento = function (array) { return array[0]; };
var ex = function (a) {
    if (typeof a === 'string') {
        return "Sua entrada \u00E9 uma String: ".concat(a);
    }
    else {
        return "Sua entrada \u00E9 um numero: ".concat(a, " ");
    }
};
console.log(ex(12));
console.log(ex("OI"));
