/* El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1. */

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

let result = -1;

for(let index = 0; index < arr.length; index++){
    const item = arr[index];
    // console.log(item)

    if(item.budget < 8000){
        result = index;
        break;
    }
}

console.log(`Indice de la primera ocurrencia ${result}`)
console.log(arr[result])


// con el metodo

let result2 = arr.findIndex( item => item.budget < 8000);
console.log(result2)
console.log(arr[result2])