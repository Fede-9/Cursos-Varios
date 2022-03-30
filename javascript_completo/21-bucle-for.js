const cursoJS = ['Intro a JS', 'Variables y tipos', 'Conversiones', 'Funciones']

for(let i = 0; i < cursoJS.length; i++){
    console.log(`${i + 1} . ${cursoJS[i]}`);
}


// recorrerlo alrevez al array

for(let i = cursoJS.length -1; i >= 0; i--){
    console.log(`${i + 1} . ${cursoJS[i]}`);
}


// ---------  bucle for of --------

// forma tradicional
for(let i = 0; i < cursoJS.length; i++){
    const leccion = cursoJS[i];
    console.log(leccion);
}

// con for of
for (const leccion of cursoJS){
    console.log(leccion);
}



// -------- bucle for in ------ (nunca usar para los array)
// este sirve para iterar las claves de un objeto
for (const i in cursoJS){
    console.log(`${i}. ${cursoJS[i]}`);
}
