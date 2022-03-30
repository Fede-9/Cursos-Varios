const sumar = function(a,b){
    return a + b;
}

const multiplicar = function(numero){
    return numero * 2;
}

const suma = sumar(2,3);
const multiplicacion = multiplicar(suma);

console.log(multiplicacion)


// --------   CON FUNCION FLECHA

let sumando = (a,b) => {
    return a + b
}

// let sumando = (a,b) => a + b;   ES LO MISMO

// tambien se puede eliminar los parentesis cuando hay un solo argumento
let multiplicando = numero =>{
    return numero * 2;
}

// y esta misma se puede reducir 

// let multiplicando = numero => numero * 2;

