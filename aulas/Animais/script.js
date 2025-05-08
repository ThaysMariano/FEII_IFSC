
 //Classe asbtrata animal
class Animal{

    #tipo
    #nome
    #som

    constructor(tipo, nome, som){

        if(new.target === Animal){
            throw new Error("A classe animal é abstrata e não pode ser instanciada")
        }
        this.#tipo = tipo;
        this.#nome = nome;
        this.#som = som;
        //this.#quantidadeAnimais = getQuantidadeAnimais+1;
    }

    //metodos abstratos
    emitirSom(){
        //return `${this.#som}!!`
        throw new Error ('Este método deve ser implementado');
    }
    locomover(){
        //return `${this.#nome} se moveu!`
        throw new Error ('Este método deve ser implementado');
    }
    comer(){
        //return `${this.#nome} comeu!`
        throw new Error ('Este método deve ser implementado');
    }
    informarTipo(){
        //return `${this.#nome} é um(a) ${this.#tipo}!`;
        throw new Error ('Este método deve ser implementado');
    }


    //getter
    get tipo(){
        return this.#tipo;
    }

    get nome(){
        return this.#nome;
    }

    get som(){
        return this.#som;
    }

    //setter
    set tipo(tipoSelecionado){
        this.#tipo = tipoSelecionado;
    }
    set nome(nomeSelecionado){

            this.#nome = nomeSelecionado;
   
    }
    set som(somSelecioando){

            this.#som = somSelecioando
 
    }

    //metodo estatico
    static #quantidadeAnimais = 0;

    static getQuantidadeAnimais(){
        return Animal.#quantidadeAnimais;
    }

    static incrementaQtd(){
        this.#quantidadeAnimais++;
    
    }

}

//a classe animal é abstrata e nao pode ser instanciada
//let animal = new Animal("aaa", "uhwu", "Ygw");


//Crie as classes de três animais diferentes que herdam da classe Animal:
 //setters no construtor

class Raposa extends Animal{
    constructor(nome){
        super();
        this.tipo = 'Raposa';       
        this.nome = nome;
        this.som = "Regolgar"; 
        Animal.incrementaQtd();
    } 

    emitirSom(){
        console.log("Jacha-chacha, chacha-chow!");
        
    }
    locomover(){
        console.log(`A ${this.tipo} correu!`);
        
    }
    comer(){
        console.log(`${this.nome} comeu uma galinha`) 
    
    }
    informarTipo(){
        console.log( `${this.nome} é um(a) ${this.tipo}!`) 
    }

}

class Guaxinim extends Animal{
    constructor(nome){
        super();
        this.tipo ="Guaxinim"; 
        this.nome = nome; 
        this.som ="zune"; 
        Animal.incrementaQtd();
    } 

    emitirSom(){
        console.log("zummmmmm")
        
    }
    locomover(){
        console.log(`O ${this.tipo} se moveu!`) 
        
    }
    comer(){
        console.log(`${this.nome} comeu fruta`) 
    
    }
    informarTipo(){
        console.log( `${this.nome} é um(a) ${this.tipo}!`);
        
    }

}

class Capivara extends Animal{
    constructor(nome){
        super();
        this.tipo = "Capivara" ; 
        this.nome = nome; 
        this.som ="assobia"; 
        Animal.incrementaQtd();
    } 

    emitirSom(){
        console.log("fiu-fiu")
        
    }
    locomover(){
        console.log(`A ${this.tipo} nadou!`) 
        
    }
    comer(){
        console.log(`${this.nome} comeu mato`) 
    
    }
    informarTipo(){
        console.log(`${this.nome} é um(a) ${this.tipo}!`) 
        
    }

}

//a quatidade conta isso
let raposa = new Raposa('Sapeca');
let guaxinim = new Guaxinim('Antunes');
let capivara = new Capivara('Roberto');


raposa.comer();
console.log(raposa.som)
raposa.emitirSom();
raposa.locomover();

console.log(Animal.getQuantidadeAnimais());








