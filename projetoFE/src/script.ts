
//variaveis dom

const form = document.querySelector('form') as HTMLFormElement;
const num1 = document.querySelector('#num1') as HTMLInputElement;
const num2: HTMLInputElement = document.querySelector('#num2')!;
const resultado = document.querySelector('#resultado') as HTMLParagraphElement;

form.addEventListener('submit', e =>{

    e.preventDefault();
    const n1 = num1.valueAsNumber;
    const n2 = Number(num2.value); 

    resultado.textContent = `Resultado: ${n1+n2}`

});
