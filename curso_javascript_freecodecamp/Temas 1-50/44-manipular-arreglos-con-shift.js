/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Manipular arreglos con .shift().
*/

let estaciones = ["Invierno", "Otoño", "Primavera"]; 

let elementoBorrado = estaciones.shift();  // elimina el primer elemento del arreglo y tambien lo retorna 

console.log(estaciones);
console.log(`El elemeto borrado es: ${elementoBorrado}`);
