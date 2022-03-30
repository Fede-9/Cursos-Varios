/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Funciones flecha.
*/


// Función Anónima (no tienen un nombre especifico)

const fecha = function() {
  // esto retorna un objeto con la fecha de hoy
  return new Date();
};

// Función flecha () 
// Son muy importantes cuando queremos pasar una funcion como argumento a otra funcion
// Asi quedaria la funcion anonima anterior de una manera mas compacta
const fecha = () => new Date();
