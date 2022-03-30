/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Patrón de retorno anticipado para funciones.
*/

function miFuncion() {
  console.log("Hola");
  return "Mundo";
  // todo codigo despues de return no se va ejecutar
  console.log("Adiós");
}

console.log(miFuncion());




function calcularRaizCuadrada(num) {
  if (num < 0) {
    return undefined;
  } 
  // La función Math. sqrt() devuelve la raíz cuadrada de un número.
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-5));
console.log(calcularRaizCuadrada(10));
console.log(calcularRaizCuadrada(150));
console.log(calcularRaizCuadrada(-25));
