import {
  sumar
} from "./suma.js";
import {
  restar
} from "./resta.js";
import {
  dividir
} from "./division.js";
import {
  multiplicar
} from "./multiplicacion.js";


const btnSumar = document.querySelector("#sumar");
const btnRestar = document.querySelector("#restar");
const btnMultiplicar = document.querySelector("#multiplicar");
const btnDividir = document.querySelector("#dividir");
const input1 = document.querySelector("#n1");
const input2 = document.querySelector("#n2");
const resultadoDiv = document.getElementById("resultado");

btnSumar.addEventListener("click", operacionSuma);
btnRestar.addEventListener("click", operacionResta);
btnMultiplicar.addEventListener("click", operacionMultiplicar);
btnDividir.addEventListener("click", operacionDividir);

function operacionSuma() {
  resultadoDiv.innerHTML = (sumar(parseInt(input1.value), parseInt(input2.value)));
}

function operacionResta() {
  resultadoDiv.innerHTML = (restar(parseInt(input1.value), parseInt(input2.value)));
}

function operacionMultiplicar() {
  resultadoDiv.innerHTML = (multiplicar(parseInt(input1.value), parseInt(input2.value)));
}

function operacionDividir() {
  resultadoDiv.innerHTML = (dividir(parseInt(input1.value), parseInt(input2.value)));
}