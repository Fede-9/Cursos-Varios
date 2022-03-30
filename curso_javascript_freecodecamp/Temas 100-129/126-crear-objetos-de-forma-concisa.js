/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Crear objetos de forma concisa.
*/

// Inicialmente

const crearPersona1 = (nombre, edad, idioma) => {
  return {
    nombre: nombre,
    edad: edad,
    idioma: idioma
  };
};

console.log(crearPersona1("Gino Smith", 28, "Español"));



// Alternativa más concisa

const crearPersona2 = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona2("Gino Smith", 28, "Español"));
