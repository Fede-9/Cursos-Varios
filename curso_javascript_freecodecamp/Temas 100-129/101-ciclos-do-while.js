/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Ciclos "do...while" en JavaScript.
*/



// La unica diferencia es que siempre se va aejecutar al menos una vez porque se ejecuta antes de evaluar la condición
// El ciclo do while es util cuando el usuario tiene que ingresar un dato asi despues se puede evaluar
var x = 16;

do {
  console.log(x);
  x++;
} while (x < 10);

x = 16;

while (x < 10) {
  console.log(x);
  x++;
}
