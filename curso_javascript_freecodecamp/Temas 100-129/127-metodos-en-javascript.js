/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Métodos en JavaScript.
*/

// Versión ES5

const persona1 = {
  nombre: "Isabel",
  presentarse: function() {
    // El this se refiere al objeto en si mismo
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};

console.log(persona1.presentarse());

// Versión ES6

const persona2 = {
  nombre: "Isabel",
  presentarse() {
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};

persona2.presentarse();
