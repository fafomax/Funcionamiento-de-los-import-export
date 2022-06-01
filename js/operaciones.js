import mostrarCartel, {
  nombre,
  edad as e,
  sumar,
  Persona
} from "./suma.js";

console.log(nombre);
console.log(e);

const btnSumar = document.querySelector("#sumar");
const input1 = document.querySelector("#n1");
const input2 = document.querySelector("#n2");

btnSumar.addEventListener("click", operacion);

const resultadoDiv = document.getElementById("resultado");

function operacion() {
  resultadoDiv.innerHTML = (sumar(parseInt(input1.value), parseInt(input2.value)));
}

const persona = new Persona("leo");
console.log(persona.mostrarInfo());