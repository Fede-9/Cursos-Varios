/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Sintaxis de desestructuración (objetos).
*/

// Para Objetos
const usuario = { 
  nombre: "Gino Smith",
  edad: 34 
};

// Forma anterior de asignar las propiedades a variables
const nombre1 = usuario.nombre;
const edad1 = usuario.edad;

// En ES6
const {nombre2, edad2} = usuario;

// Ejemplo

var coordenadas = {
  x: 4, 
  y: 6, 
  z: 12
};

// Anteriormente.
var x = coordenadas.x;
var y = coordenadas.y;
var z = coordenadas.z;

// Ahora podemos usar la sintaxis de desestructuración.
const {x, y, z} = coordenadas;
console.log(x);
console.log(y);
console.log(z);
