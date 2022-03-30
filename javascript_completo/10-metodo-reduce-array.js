/* El metodo reduce() ejecuta una funcion redductora sobre cada elemento del array devolviendo un solo valor */

const numbers = [1,2,3,4,5,6];

const res = numbers.reduce((acumulador,item) =>{
    return acumulador = acumulador + item;
},0); /* le indico en cuanto tiene que comenzar el acumulador */

console.log(res)


// otro ejemplo

const strings = ['Mi','nombre','es','Federico'];

const presentacion = strings.reduce((acc,item) => {
    return acc += ' ' + item
},'Hola!!');

console.log(presentacion)


// otro ejemplo

const objeto = [
    {
        nombre: 'Fede',
        edad: 23
    },
    {
        nombre: 'Alan',
        edad: 13
    }
];

const totalEdad = objeto.reduce((acc,item) => {
    return acc += item.edad;
},0); 

console.log(totalEdad)


// otro ejemplo

const numeros = [10,0,52,3,78,65,48];

const mayor = numeros.reduce((acc,item) => {
    return Math.max(acc, item);
    // return Math.min(acc, item);
},0);

console.log(mayor)



// ----- EJEMPLO ---------

// for tradicional

let arr = [18,45,2,4,7,79,69,53,25,46];

let result = 0;

for(let index = 0; index < arr.length; index++){
    const item = arr[index];
    // console.log(item)
    result += item;
}

console.log(`La suma de los elementos es: ${result}`)


// metodo reduce

let result2 = arr.reduce( (acum,item,index) => {
    return acum + item;
    
},0); //con este valor va a iniciar el acumulador

console.log(result2)


// otro ejemplo

let result3 = Number.MIN_VALUE;

for(let index = 0; index < arr.length; index++){
    const item = arr[index];
    // console.log(item)
    result3 = Math.max(result3,item);
    
}

console.log(`El valor maximo es: ${result3}`)



let result4 = arr.reduce( (acum,item,index) => {
    return Math.max(acum,item);

}, Number.MIN_VALUE);

console.log(result4)