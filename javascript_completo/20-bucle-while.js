

let contador = 0;

while (contador < 5){
    contador++;
    console.log('while',contador);
    if(contador === 3) break;
}

// do while

/* La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez. */

let num = 0;

do {
    num++;
    console.log(num);

}while(num < 0);



// otro ejemplo

let cont = -5;

do {
    if(cont === 0) {
    cont ++;
    continue;
    }
    
    console.log('while', 10 / cont);
    cont++;

}while(cont <= 5);
