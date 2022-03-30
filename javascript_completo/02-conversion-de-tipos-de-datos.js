let cadena = '5';
let numero = 5.25;
let condicion = true;
let nulo = null;
let indefinido = undefined;

// se va a concatenar al ser un string
console.log(cadena + numero); /* 55 */
console.log(cadena + condicion);/* 5true */
console.log(cadena + nulo);/* 5null */
console.log(cadena + indefinido);/* 5undefined */


console.log(numero + condicion); /* 6  porque el booleano se convierte en numero */
console.log(numero + nulo); /* 5  el valor nulo siempre se convierte en cero */
console.log(numero + indefinido);/* NaN  nos dice que la operacion cualquiera que estemos haciendo no es un numero */



console.log(numero - cadena); /* 0 */


//FORMAS DE CONVERSION EXPLICITA

Number()
String()
Boolean()
parseInt()
parseFloat()


console.log(String(numero));
console.log(String(condicion));

console.log(Number(cadena));
console.log(Number(condicion));


// si el valor es distinto de cero siempre da true sino false
console.log(Boolean(''));
console.log(Boolean(cadena));
console.log(Boolean('0'));
console.log(Boolean('false'));



console.log(parseFloat(numero))

console.log(parseInt(cadena))
console.log(parseInt(numero))

