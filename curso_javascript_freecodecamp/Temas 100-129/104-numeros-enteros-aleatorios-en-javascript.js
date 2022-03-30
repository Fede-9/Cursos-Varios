/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Números enteros aleatorios en JavaScript.
*/


// Math. floor() es un método del objeto estándar Math que redondea un número dado hacia el número entero anterior. ... floor() devuelve el número entero que sea menor o igual al número dado.

var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);

function generarEnteroAleatorio(limiteSuperior) {
  // Generar un número aleatorio entre 0 y el límite
  // superior (sin incluirlo).
  return Math.floor(Math.random() * limiteSuperior);
}

console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));

// generar numeros aleatorios con un ciclo

for (var i = 0; i < 15; i++) {
  console.log(generarEnteroAleatorio(5));
}
