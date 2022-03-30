/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Sintaxis de desestructuración (Arreglos).
*/

var a;
var b;
var c;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); //3

[a, b] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(b); // 2

// ponemos las comas para llegar al elemento que queremos guardar en la variable
[a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 5

// Intercambiar valores de variables

var a = 8;
var b = 6;

[b, a] = [b, a];

console.log("a: ", a);
console.log("b: ", b);
