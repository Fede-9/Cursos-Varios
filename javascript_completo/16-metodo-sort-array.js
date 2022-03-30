const arr = [2,45,62,3,5,8,89,47,12,10];


for(let i = 0; i < arr.length; i++){

    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }   
}

console.log(arr);


let arr2 = [...arr]; //esto es hacer una copia

arr2.sort( (i, j) => {
    return i - j;
    // return j - i;
});

console.log(arr2)

