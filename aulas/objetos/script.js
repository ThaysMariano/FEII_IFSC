//01 Função fábrica para criar objetos da classe carros

function criarCarro(ano, modelo, marca){

    let c = Object.create(criarCarro.prototipo);   //prototipo -> qualquer nome

    //obj a partir do prototipo
    c.ano = ano;
    c.modelo = modelo;
    c.marca = marca;
    return c;

}

//metodos que serao usados

//antigamente
criarCarro.prototipo = {

    andar: function(){
        console.log("o carro andou");
    },
    buzinar: function(){
        console.log("bip bip")
    },
    virar: function(direcao){
        console.log(`o carro virou para a ${direcao}`)
    },

}

let carrao = criarCarro(2014, "Gol bolinha", "Volks");

carrao.andar();
carrao.buzinar();
carrao.virar("esquerda");


//02 Animais

function Animal(tipo, nome, som){
    this.tipo = tipo;
    this.nome = nome;
    this.som = som;

}

//nao cria uma variavel, usa o atributo prototype q toda classe tem
Animal.prototype = {

    emitirSom(){
        console.log(`O ${this.tipo} faz ${this.som} `)
    },
    locomover(){
        console.log(`O ${this.nome} se locomoveu.`)
    },
    comer(){
        console.log(`O ${this.tipo} comeu`)
    }
}

let bichao = new Animal("gachorro", "Princeso", "Miau-au");

bichao.emitirSom();
bichao.locomover();
bichao.comer();

// 03 livro
//atualizado
class Livro{
    constructor(titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    emprestar(){
        console.log(`O livro "${this.titulo}" foi emprestado!`);
    }
    devolver(){
        console.log(`O livro "${this.titulo}" foi devolvido!`);
    }

}

let tomo = new Livro("Dom Casmurro", "Machado de Assis", "velho")
tomo.emprestar();
tomo.devolver();


























