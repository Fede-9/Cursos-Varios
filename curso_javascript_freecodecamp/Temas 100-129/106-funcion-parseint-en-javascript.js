/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Función "parseInt" en JavaScript.
*/


// para pasar de ua cadena a un tipo de dato entero

console.log(parseInt("5"));
console.log(parseInt("-47"));
console.log(parseInt("0"));

console.log(parseInt("6.7"));
console.log(parseInt("6.2"));

// tambien pasa de valor decimal a entero
console.log(parseInt(6.7));

// como no representa a un numero de NaN
console.log(parseInt("abc")); // NaN

// Ejemplo con variables

var a = "5";
var b = "7";

console.log(a + b); //57

var a = parseInt("5");
var b = parseInt("7");

console.log(a + b); //12
