/* El metodo map() ejecuta una funcion para cada elemento del array creando un nuevo array con los resultados */

const carros = [
    {
        modelo: 'Ford Mustang',
        millage: 25000,
        motor: 5.0,
        produccion: 2017,
        precio: 25000
    },
    {
        modelo: 'Honda',
        millage: 10000,
        produccion: 2021,
        precio: 25000
    },
    {
        modelo: 'Mini Cooper',
        millage: 154454,
        produccion: 1998,
        precio: 5000000
    },
];


const modelos = carros.map((carro) => carro.modelo);
console.log(modelos)


const preciosEuro = carros.map((carro) => carro.precio * 0.85)
console.log(preciosEuro)


/* Solo usar este metodo cuando se desea crear un nuevo array */


// ----- OTRO EJEMPLO ----

// forma comun de hacerlo
let arr = ['fede','juan','papel','lucas'];

let result = []

for (let index = 0; index < arr.length; index++ ){
    const item = arr[index];
    

    result.push(`<div>${item}</div>`);
}

console.log(result)


// con funcion flecha

let result2 = arr.map( (item,index) => {
    return `<div>${item}</div>` ;
});

console.log(result2)
console.log(arr)

