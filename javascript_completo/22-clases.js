// class Curso{
//     constructor(titulo ,dificultad){
//         this.titulo = titulo;
//         this._dificultad = dificultad;

//         this.lecciones = [];    
//     }

//     get dificultad(){
//         console.log('getter');
//         return this._dificultad;
//     }

//     set dificultad(nuevaDiicultad){
//         if(nuevaDiicultad >= 0 && nuevaDiicultad <= 5){
//             this._dificultad = nuevaDiicultad;

//         }else{
//             console.log('No hago nada');

//         }
//     }

//     agregarLeccion(leccion){
//         this.lecciones.push(leccion);
//     }

//     eliminarUltimaLeccion(){
//         this.lecciones.pop();
//     }
// }

// // instanciamos

// const cursoJS = new Curso('Javascript', 1);
// cursoJS.dificultad = 3;
// cursoJS.dificultad = 7;


// console.log(cursoJS)



// variables y metodos estaticos (de la propia clase)

class Curso{
    constructor(titulo ,dificultad){
        this.titulo = titulo;
        this.dificultad = dificultad;

        this.lecciones = [];    
    }

    static BASE_URL = 'desarrollo.com/cursos/';

    static saludar(){
        console.log('Saludo');
    }

    agregarLeccion(leccion){
        this.lecciones.push(leccion);
    }

    eliminarUltimaLeccion(){
        this.lecciones.pop();
    }
}

// const cursoJS = new Curso('Javascript', 1);


// se acceden invocando a la clase unicamente
console.log(Curso.BASE_URL);
Curso.saludar();