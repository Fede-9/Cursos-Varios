const NUM_PIEZAS = 10;
const PROB_ERROR = 0.25;

let correctas = 0;
let defectuosas = 0;

const comprobar = () =>{
    return Math.random() < PROB_ERROR;

}

function lanzarError(){
    throw new Error('Pieza defectuosa');
}

for(let i = 1; i <= NUM_PIEZAS; i++){
    const esDefectuosa = comprobar();

    try{
        if(esDefectuosa) lanzarError();
        
        correctas++;
    }catch (ex) {
        defectuosas++;
        console.log(ex);
    }
   
    
}

console.log(`Fabricadas: ${NUM_PIEZAS}`);
console.log(`-- Correctas: ${correctas}`);
console.log(`-- Defectuosas: ${defectuosas}`);