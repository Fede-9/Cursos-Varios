/* El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. 
Sirve para encontrar la primer coincidencia*/

let arr = [
    {
        city: 'California',
        budget: 5500
    },
    {
        city: 'NY',
        budget: 8000
    },
    
    {
        city: 'Orlando',
        budget: 2000
    }
];


// forma tradicional

let result = {};

for(let index = 0; index < arr.length; index++){
    const item = arr[index];
    // console.log(item)

    if(item.budget < 8000){
        result = item;
        break;
    }
}

console.log(result)

// con metodo find

let result2 = arr.find(item => item.budget < 8000 );
console.log(result2)