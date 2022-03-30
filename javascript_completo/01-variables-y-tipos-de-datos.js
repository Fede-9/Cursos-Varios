let miVariable = 5;
console.log(miVariable);
// reasignacion de la variable
miVariable = 6;
console.log(miVariable)


// Practica

const IVA = 1.21;

let precio1 = 25;
precio1 = precio1 * IVA;

let precio2 = 15;
precio2 = precio2 * IVA;

let cantidad1 = 2;
let cantidad2 = 3;

let total = precio1 * cantidad1 + precio2 * cantidad2;
console.log(total);


// STRING

console.log("Mi nombre es 'Federico'")

let edad = 23;
console.log('Mi nombre es Federico y tengo ' + edad + ' años')
// nueva forma de hacerlo (template string)
console.log(`Mi nombre es Federico y tengo ${edad} años`)



// NUMBER

let numero1 = 6;
let numero2 = -5;
let numero3 = 5.4;
let numero4 = -5.4;
let numero5 = 1e4;

console.log(numero1 + numero2)
console.log(numero2 - numero3)
console.log(numero3 / numero4)
console.log(numero4 * numero5)
console.log(numero1 % numero2)

let num = 6;
// distintas formas de incrementar valor
num = num + 2;
num += 2;
num++
console.log(num) /* 8 */

num -= 2;
num *= 2;
num /= 2;


// BOOLEAN

true
false

// NULL     UNDEFINED

const nulo = null; /* tiene un valor nulo la variable */
const indefinido = undefined; /* no esta definido el valor de la variable */

console.log(nulo,indefinido)


// PARA CONOCER LOS TIPOS DE DATOS

console.log(typeof(num))



// distintos tipos de datos

let resultado = '2' + 2;
console.log(resultado) /* 22 */
resultado *= 2; 
console.log(resultado) /* 44 */