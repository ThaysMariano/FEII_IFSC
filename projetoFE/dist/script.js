
//variaveis dom

const form = document.querySelector('form');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', e =>{

    e.preventDefault();
    const n1 = num1.valueAsNumber;
    const n2 = Number(num2.value); 

    resultado.textContent = `Resultado: ${n1+n2}`

});


