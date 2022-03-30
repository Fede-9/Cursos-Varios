let arreglo = [2,4,6,8,10,12];

for (let i = 0; i < arreglo.length(); i++){
    const item = arreglo[i];
    const index = i;

    console.log(item, index) //2 0, 4 1, 6 2, 8 3, 10 4, 12 5
}



arreglo.forEach(function(item,index){
    console.log(item, index); //2 0, 4 1, 6 2, 8 3, 10 4, 12 5
});



arreglo.forEach((item,index) => {
    console.log(item,index); //2 0, 4 1, 6 2, 8 3, 10 4, 12 5
})


