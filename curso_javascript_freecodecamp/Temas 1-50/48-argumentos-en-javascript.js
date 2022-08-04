/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Argumentos en JavaScript.
*/

function sumar(a, b) {
  return `La suma es: ${a+b}`;
  
}

console.log(sumar(5, 3));
console.log(sumar(7, 14));
console.log(sumar(51, 31));


// Podemos pasar variables como argumentos
// y sus nombres no tienen que ser iguales a los
// parámetros.

var x = 5;
var y = 3;

console.log(sumar(x, y));

// Ejemplo

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + " " + cadena2 + " " + cadena3);
}

concatenarTresCadenas("Estoy", "aprendiendo", "a programar");


