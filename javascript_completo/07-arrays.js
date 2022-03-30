
let lista = [1,2,3,4,5,6];


lista.unshift(10); //agrega al comienzo
console.log(lista)

lista.push(7); //agrega al ultimo
console.log(lista);

let ultimoElemento = lista.pop(); //elimina ultimo momento y lo devuelve
console.log(ultimoElemento);

let primerElemento = lista.shift(); //extrae el primer elemento
console.log(primerElemento)


// AÑADIR ELEMENTOS EN DETERMINADA POSICION

// El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

// Parametros:
/* start
Índice donde se comenzará a cambiar el array (con 0 como origen). Si es mayor que la longitud del array, el punto inicial será la longitud del array. Si es negativo, empezará esa cantidad de elementos contando desde el final. */

/* deleteCount Opcional
Un entero indicando el número de elementos a eliminar del array antiguo. Si deleteCount es igual a 0 o negativo, no se eliminará ningún elemento. En este caso, se debe especificar al menos un nuevo elemento (ver más abajo).*/

/* item1, item2, ...  Opcional
Los elementos que se agregarán al array, empezando en el índice start. Si no se especifica ningún elemento, splice() solamente eliminará elementos del array. */



let list = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
list.splice(3, 0, 'Hola', 'Adrian', 'Fede');
console.log(list)

















