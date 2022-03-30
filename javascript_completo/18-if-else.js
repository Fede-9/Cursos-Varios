const numero = 8;

if(numero === 0){
    console.log('cero');
}else if(numero === 1){
    console.log('Uno');
}else{
    console.log('no es cero ni uno');
}

// lo podemos simplificar asi

if(numero === 0) console.log('cero');
else if(numero === 1) console.log('Uno');
else console.log('no es cero ni uno');



// se puede hacer en una sola linea cuando es un solo if
if(numero != 5) console.log('Es distinto de 5');




// ejemplos

const valor = 0;

if (valor) console.log('Truthy');
else console.log('Falsey');