class  Usuario{
    constructor(nombre, email, password){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }


    saludo(){
        console.log(`Hola soy ${this.nombre}`);
    }


    login(email,password){
        if(this.email === email && this.password === password) return true;
        else return false;

        // return(this.email === email && this.password === password);   Podria hacerlo asi directamente, total me retornaria true o false
    }
}

// ------ herencia ----
class Alumno extends Usuario{
    constructor(nombre, email, password){
        // llama al método constructor del objeto padre.
        super(nombre, email, password);

        this.activo = false;
        this.cursos = [];
    }
   
   activar(){
       this.activo = true;
   }

   login(email, password){
       if (this.activo) return super.login(email,password);
       else return false;
   }
}



// instanciamos

// const pablo = new Usuario('Pablo','pablo@gmail.com','pablo123');

const fede = new Alumno('Fede','fede@gmail.com','fede123');

console.log(fede instanceof Alumno) //true

// console.log(pablo)
console.log(fede)




