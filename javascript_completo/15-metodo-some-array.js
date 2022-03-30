/* El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada. */

const arr = [
    {id: 0, name: 'Las tortas de doña Martha'},
    {id: 1, name: 'Linguinis', rating: 3.5},
    {id: 2, name: 'El sushi de perro'}
];

let test = false;

for(let index = 0; index < arr.length; index++){
    const item = arr[index];
    // console.log(item)

    if(item.rating == undefined){
        test = true;
        break;
    }

}

console.log(test) //true


// metodo some


const test2 = arr.some( item => {
    return item.rating == undefined;
});

console.log(test2); //true