import mostrarCartel, { nombre, edad as e, sumar, Persona } from './suma.js'

console.log(nombre);
console.log(e);

const btnSumar = document.querySelector('#sumar')
const input1 = document.querySelector('#n1')
const input2 = document.querySelector('#n2')


btnSumar.addEventListener('click', operacion)

function operacion() {
    console.log(sumar(input1.value, input2.value));
}

const persona = new Persona('Ariel')
console.log(persona.mostrarInfo());

mostrarCartel()