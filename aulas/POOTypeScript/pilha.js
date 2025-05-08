"use strict";
//criar uma pilha generica
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayStack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    size() {
        return this.items.length;
    }
    empty() {
        return this.items.length == 0;
    }
}
let pilha = new ArrayStack(); //tipo number, se nao colocar é na hr de add dado
console.log("Vazia? " + pilha.empty);
pilha.push(2);
pilha.push(62);
console.log(pilha.pop);
pilha.push(3);
console.log("Tamanho? " + pilha.size);
console.log("Vazia? " + pilha.empty);
pilha.pop();
//-------------------------------------------
// mais como aula de estrutura de dados
class Pilha {
    //remove do inicio da fila e retorna
    pop() {
        this.len--;
        return this.area[0];
    }
    //add no final da fila
    push(element) {
        this.area[this.len] = element;
        this.len++;
    }
    empty() {
        if (this.len == 0) {
            return true;
        }
        return false;
    }
    size() {
        return this.len;
    }
}
