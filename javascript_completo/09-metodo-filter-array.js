/* El metodo filter() al igual que el map crea un nuevo array colocando los elementos que pasan algun criterio */

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

const carrosNuevos = carros.filter((carro) => carro.produccion > 2010 && carro.millage < 30000);

console.log(carrosNuevos);



// ----- OTRO EJEMPLO ---

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let result = [];

for(let index = 0; index < arr.length; index++){
    const item = arr[index];

    if(item >= 5 && item <= 11){
        result.push(item);

    }
}

console.log(result)

// funcion comun
let result2 = arr.filter( function (item,index){
    return item >= 5 && item <= 11;
})

console.log(result2)

// funcion flecha

let result3 = arr.filter( (item,index) => item >= 5 && item <= 11 );

console.log(result3)
