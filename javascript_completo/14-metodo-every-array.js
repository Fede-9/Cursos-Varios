// Determina si todos los elementos en el array satisfacen una condición, devuelve (true/false).

const arr = [10,23,5,2,0,99,22,56,88];

let testPassed = false;

for(let index = 0; index < arr.length; index++){
    const item = arr[index];

    if(item > 0) testPassed= true;
    if(item <= 0){
        testPassed = false;
        break;
    }

}
console.log(testPassed); //false


// metodo every

const passed = arr.every((item, _) => item > 0);
console.log(passed)