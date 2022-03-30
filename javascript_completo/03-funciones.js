function saludar(nombre){
    return `Hola ${nombre}, bienvenidooo`;
}


let resultado = saludar('Fede')
console.log('Despues del llamado', resultado)




// FUNCIONES ANONIMAS

let saludar2 = function (nombre){
    return `Hola ${nombre}, bienvenidooo`;
};

let resultado2 = saludar2('Adrian');
console.log(resultado2);



// OTRO EJEMPLO

let obtenerSaludo = function(nombre){
    return `Hola ${nombre}, bienvenidooo`;
}

let imprimirSaludo = function(mensaje){
    console.log(mensaje);
};

const alertSaludo = function(mensaje){
    alert(mensaje);
}

let saludando = function(obtener,imprimir){
    let saludo = obtener('Lucas');
    imprimir(saludo);
};


saludando(obtenerSaludo,imprimirSaludo);
saludando(obtenerSaludo,alertSaludo)
