/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Actualizar las propiedades de un objeto.
*/

var mochila = {
  "color": "azul",
  "tamaño": "mediano",
  "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color); // azul
mochila.color = "verde";
console.log(mochila.color); // verde

console.log(contenido);
// agrega elemento a la array
mochila.contenido.push("lápiz");
console.log(contenido);

// para reasignar contenido nuevo
mochila.contenido = [];
console.log(mochila.contenido);
