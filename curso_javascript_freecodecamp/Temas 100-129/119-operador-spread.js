/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Operador spread.
*/

const numeros = [1, 2, 3];

function sumar(x, y, z) {
  return x + y + z;
}


// En lugar de hacer esto
console.log(sumar(numeros[0],numeros[1],numeros[2]))
// Hacemos esto gracias al operador spread, lo que hace es que descompone el array en sus elementos asi los puede pasar a la función.
console.log(sumar(...numeros));
