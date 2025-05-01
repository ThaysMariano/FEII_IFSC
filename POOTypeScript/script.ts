//Copiado exercicio de Animais/script.js e transformando em ts

//enum tipos de animias
enum TipoAnimal{
    RAPOSA = 'raposa',
    GUAXINIM = 'guaxinim',
    CAPIVARA = 'capivara'
}


//------------------------------------------------------------EXC 1---------------------------------------------------------------------------



 //Classe asbtrata animal
 abstract class AnimalTs{

    //_ para nao ter o mesmo nome dos geters e setters 
    constructor(
        private _tipo: TipoAnimal, //gato' | 'cachorro'
        private readonly _nome: string,  //n pode mudar o nome
        private _som: string
    ){}
        
    //getter
    get tipo(): string{
        return this._tipo;
    }

    get nome(): string{
        return this._nome;
    }

    get som(): string{
        return this._som;
    }

    //setter
    set tipo(tipoSelecionado: TipoAnimal){
        this._tipo = tipoSelecionado;
    }

    set som(somSelecioando){

            this._som = somSelecioando
 
    }


    //metodos abstratos
    abstract emitirSom():void

    abstract locomover(): void
    
    abstract comer(): void

    abstract informarTipo(): void


    //metodo estatico
    private static quantidadeAnimais = 0;

    private static getQuantidadeAnimais(){
        return AnimalTs.quantidadeAnimais;
    }

    private static incrementaQtd(){
        this.quantidadeAnimais++;
    
    }

}



//------------------------------------------------------------EXC 2---------------------------------------------------------------------------


//a classe animal é abstrata e nao pode ser instanciada
//let animal = new Animal("aaa", "uhwu", "Ygw");


//Crie as classes de três animais diferentes que herdam da classe Animal:
 //setters no construtor

 class Raposaa extends AnimalTs{

    constructor(nome: string){
        super(TipoAnimal.RAPOSA, nome, 'regolgar');        
        // Animal.incrementaQtd();
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

class Guaxinimm extends AnimalTs{
    constructor(nome: string){
        super(TipoAnimal.GUAXINIM, nome, 'zune');
        // Animal.incrementaQtd();
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

class Capivaraa extends AnimalTs{
    constructor(nome: string){
        super(TipoAnimal.CAPIVARA, nome, 'assobia');
        // Animal.incrementaQtd();
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
        console.log(`${this.nome} é um(a) ${TipoAnimal.CAPIVARA}!`) 
        
    }

}

//a quatidade conta isso
let raposaa = new Raposaa('Sapeca');
let guaxinimm = new Guaxinimm('Antunes');
let capivaraa = new Capivaraa('Roberto');


raposaa.comer();
console.log(raposaa.som)
raposaa.emitirSom();
raposaa.locomover();


//------------------------------------------------------------EXC 3---------------------------------------------------------------------------


// console.log(AnimalTs.getQuantidadeAnimais());








