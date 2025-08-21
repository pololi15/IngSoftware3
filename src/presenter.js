import sumar from "./sumador";
import saludar from "./funssaludar";


const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});


const nombre = document.querySelector("#Nombre");
const edad = document.querySelector("#Edad");
const genero = document.querySelector("#Genero");
const form1 = document.querySelector("#saludar-form");
const div1 = document.querySelector("#resultado-saludar-div");

form1.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreValue = nombre.value;
  const edadValue = Number.parseInt(edad.value);
  const generoValue = genero.value;

  const horaActual = new Date().getHours();
  try {
    let resultado = "";
    resultado += "<p>" + saludar.saludar1() + "</p>";
    resultado += "<p>" + saludar.saludar(nombreValue) + "</p>";
    resultado += "<p>" + saludar.saludarNombreGenero(nombreValue, generoValue) + "</p>";
    resultado += "<p>" + saludar.saludarPorHora(horaActual) + "</p>";
    resultado += "<p>" + saludar.saludarEspaniol() + "</p>";
    resultado += "<p>" + saludar.saludarIngles() + "</p>";
    div1.innerHTML += "<p>" + saludar.saludarNombreEdad(nombreValue, edadValue) + "</p>";
    div1.innerHTML = resultado;

    
  } catch (error) {
    div1.innerHTML = "<p>Error: " + error.message + "</p>";
  }
});
