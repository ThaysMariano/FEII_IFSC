"use strict";
//Copiado exercicio de Animais/script.js e transformando em ts
//enum tipos de animias
var TipoAnimal;
(function (TipoAnimal) {
    TipoAnimal["RAPOSA"] = "raposa";
    TipoAnimal["GUAXINIM"] = "guaxinim";
    TipoAnimal["CAPIVARA"] = "capivara";
})(TipoAnimal || (TipoAnimal = {}));
//------------------------------------------------------------EXC 1---------------------------------------------------------------------------
//Classe asbtrata animal
class AnimalTs {
    //_ para nao ter o mesmo nome dos geters e setters 
    constructor(_tipo, //gato' | 'cachorro'
    _nome, //n pode mudar o nome
    _som) {
        this._tipo = _tipo;
        this._nome = _nome;
        this._som = _som;
    }
    //getter
    get tipo() {
        return this._tipo;
    }
    get nome() {
        return this._nome;
    }
    get som() {
        return this._som;
    }
    //setter
    set tipo(tipoSelecionado) {
        this._tipo = tipoSelecionado;
    }
    set som(somSelecioando) {
        this._som = somSelecioando;
    }
    static getQuantidadeAnimais() {
        return AnimalTs.quantidadeAnimais;
    }
    static incrementaQtd() {
        this.quantidadeAnimais++;
    }
}
//metodo estatico
AnimalTs.quantidadeAnimais = 0;
//------------------------------------------------------------EXC 2---------------------------------------------------------------------------
//a classe animal é abstrata e nao pode ser instanciada
//let animal = new Animal("aaa", "uhwu", "Ygw");
//Crie as classes de três animais diferentes que herdam da classe Animal:
//setters no construtor
class Raposaa extends AnimalTs {
    constructor(nome) {
        super(TipoAnimal.RAPOSA, nome, 'regolgar');
        // Animal.incrementaQtd();
    }
    emitirSom() {
        console.log("Jacha-chacha, chacha-chow!");
    }
    locomover() {
        console.log(`A ${this.tipo} correu!`);
    }
    comer() {
        console.log(`${this.nome} comeu uma galinha`);
    }
    informarTipo() {
        console.log(`${this.nome} é um(a) ${this.tipo}!`);
    }
}
class Guaxinimm extends AnimalTs {
    constructor(nome) {
        super(TipoAnimal.GUAXINIM, nome, 'zune');
        // Animal.incrementaQtd();
    }
    emitirSom() {
        console.log("zummmmmm");
    }
    locomover() {
        console.log(`O ${this.tipo} se moveu!`);
    }
    comer() {
        console.log(`${this.nome} comeu fruta`);
    }
    informarTipo() {
        console.log(`${this.nome} é um(a) ${this.tipo}!`);
    }
}
class Capivaraa extends AnimalTs {
    constructor(nome) {
        super(TipoAnimal.CAPIVARA, nome, 'assobia');
        // Animal.incrementaQtd();
    }
    emitirSom() {
        console.log("fiu-fiu");
    }
    locomover() {
        console.log(`A ${this.tipo} nadou!`);
    }
    comer() {
        console.log(`${this.nome} comeu mato`);
    }
    informarTipo() {
        console.log(`${this.nome} é um(a) ${TipoAnimal.CAPIVARA}!`);
    }
}
//a quatidade conta isso
let raposaa = new Raposaa('Sapeca');
let guaxinimm = new Guaxinimm('Antunes');
let capivaraa = new Capivaraa('Roberto');
raposaa.comer();
console.log(raposaa.som);
raposaa.emitirSom();
raposaa.locomover();
//------------------------------------------------------------EXC 3---------------------------------------------------------------------------
// console.log(AnimalTs.getQuantidadeAnimais());
