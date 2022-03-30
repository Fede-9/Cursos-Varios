/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: La palabra reservada const.
*/


// Por convencion se escriben en mayuscula y con snake_case, asi se pueden identificar facilmente y se sabe que no hay que modificarlas.
const MI_CONSTANTE = 35;

console.log(MI_CONSTANTE);

// MI_CONSTANTE = 15;
// Error si la quiero reasignar o cambiar su valor


function calcularAreaCirculo(radio) {
  const PI = 3.14;

  if (radio < 0) {
      return undefined;
  }

  return PI * (radio ** 2);
}

console.log(calcularAreaCirculo(5));
console.log(calcularAreaCirculo(10));
