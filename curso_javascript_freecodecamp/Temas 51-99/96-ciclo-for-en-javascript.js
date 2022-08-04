/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Ciclo "for" en JavaScript.
*/


// Ejemplo 1

var miArreglo = [];

// Lo primero es inicializar el valor de una variable, luego la condicion y por ultimo le decimos como actualizar la variable en cada vuelta.
for (let i = 0; i < 10; i++) {
  miArreglo.push(i);
}

console.log(miArreglo);

// Ejemplo 2

var miArreglo = [];

for (let i = 0; i < 10; i += 2) {
  miArreglo.push("A");
}

console.log(miArreglo);
