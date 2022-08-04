/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Ciclos "for" anidados.
*/

var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 

// para mostrar los array anidados

for (let i = 0; i < miArreglo.length; i++){
  console.log(miArreglo[i])

}


// Por cada arreglo anidado
for (var i = 0; i < miArreglo.length; i++) {
  console.log('--- Nueva iteracción ---');
  var arregloAnidado = miArreglo[i]; //array
  console.log('Arreglo: ' + arregloAnidado);

  // Por cada elemento del arreglo anidado
  for (var j = 0; j < arregloAnidado.length; j++) {
    console.log('--- Ciclo anidado ---');
    console.log('Elemento:');
    console.log(arregloAnidado[j]); //elemento
  }
}



