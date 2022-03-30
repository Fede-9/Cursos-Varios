const simple = (tarea) => console.log(tarea);

const pesada = (tarea) => {
    console.log(`Empezando tarea ${tarea}...`);

    for(let i = 0; i < 10000000; i++){
        Math.random() - Math.random() * Math.random();
    }
    console.log(`Tarea ${tarea} terminada`);
}


const tareaPablo = (tarea, callback, tiempo) =>{
    console.log(tarea);
    setTimeout(callback, tiempo);
}

const tareas = [
    () => simple('Escribir guion'),
    () => tareaPablo('Hace miniatura', () => simple('revisar miniatura'), 2000),
    () => pesada('grabar video'),
    () => tareaPablo('editar video', () => simple('revisar video'), 5000)
]

for(const tarea of tareas) tarea();