/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Operador condicional (ternario).
*/

// Con un condicional.

function retornarMinimo(x, y) {
  if (x < y) {
  	return x;
  } else {
  	return y;
  }
}

console.log(retornarMinimo(4,56))

// Con el operador condicional (ternario).

function retornarMinimo(x, y) {
  // esto me dice que si esa condicion es verdadera me retorne x sino es verdadera que retorne y
  return x < y ? x : y;
}

console.log(retornarMinimo(4, 7));
console.log(retornarMinimo(8, 2));
console.log(retornarMinimo(5, 5));

// Ejemplo 2

var a = 15;
var b = 9;

console.log(a > b ? a + 2 : b * 3);

var a = 5;
var b = 10;

console.log(a > b ? a + 2 : b * 3);
