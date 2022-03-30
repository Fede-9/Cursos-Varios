/* La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen. */

const numero = 3;

switch(numero){
    case 0: // es como dijiera if(numero == 0)
        console.log('cero');
        break;
    case 1: 
        console.log('uno');
        break;
    case 2:
        console.log('dos');
        break;
    case 3:
        console.log('tres');
        break;
    default: //es como un else
        console.log('otro');
}


// tambien puedo agruparlos


switch(numero){
    case 0:
    case 1: 
    case 2:
        console.log('cero');
        break;
    case 3:
    case 4:
    case 5:
        console.log('tres');
        break;
    default: //es como un else
        console.log('otro');
     
        
}
