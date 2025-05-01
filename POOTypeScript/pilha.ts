//criar uma pilha generica

import { connect } from "http2";

//criar a interface para utlizar - não precisa criar dentro da classe
interface Stack<T>{
    push(element: T):void
    pop():T | undefined
    size():number
    empty():boolean
}

class ArrayStack<T> implements Stack<T>{
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element)
    }

    pop(): T | undefined{
        return this.items.pop();
    }

    size(): number {
        return this.items.length;
    }

    empty(): boolean {
        return this.items.length == 0;
    }

}


let pilha = new ArrayStack<number>();   //tipo number, se nao colocar é na hr de add dado

console.log("Vazia? "+ pilha.empty);
pilha.push(2);
pilha.push(62);

console.log(pilha.pop);

pilha.push(3);

console.log("Tamanho? "+pilha.size);
console.log("Vazia? "+ pilha.empty);
pilha.pop();






//-------------------------------------------








// mais como aula de estrutura de dados
class Pilha <T>{

    area: T[] 
    len: number

    //remove do inicio da fila e retorna
    pop():T{
        this.len--;
        return this.area[0]
    }

    //add no final da fila
    push(element: T):void {
        this.area[this.len]= element
        this.len++;
    }

    empty():boolean{
        if(this.len==0){
            return true
        }
        return false
    }

    size():number{
        return this.len;
    }
}









