/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Acceder a propiedades: notación de corchetes.
*/

var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "numero de paginas": 200,
  "numero de hojas": 100
};

// La notacion con corchetes nor pemite acceder a las propiedades que tienen espacios como por ejemplo: "numero de paginas" pero tambien lo podemos usar para las que no tieien como es en el caso de "color"

console.log(miCuaderno["color"]); // Notación de corchetes
console.log(miCuaderno.color);    // Notación de punto

console.log(miCuaderno["numero de paginas"]); // Notación de corchetes
// console.log(miCuaderno.numero de paginas); // No funciona porque tiene espacios

// Posibles modificaciones

// camelCase (más común)
var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "numeroDePaginas": 200,
  "numeroDeHojas": 100
};

console.log(miCuaderno.numeroDePaginas);
console.log(miCuaderno.numeroDeHojas);
