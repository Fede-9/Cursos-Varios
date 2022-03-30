const persona = {
    nombre: 'Fede',
    apellido: 'Cometto',
    celular: 154551651,
    edad: 23
}

// acceder a los atributos
console.log(persona)
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.celular)
console.log(persona.edad)

// otra forma de acceder a los atributos
console.log(persona['nombre'])
console.log(persona['apellido'])
console.log(persona['celular'])
console.log(persona['edad'])


// reasignando atributo
persona.nombre = 'Facundo'
console.log(persona.nombre)