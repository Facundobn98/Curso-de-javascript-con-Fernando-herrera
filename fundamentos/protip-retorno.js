//function crearPersonal(nombre,apellido){
//    return {nombre,apellido}
//}

//const persona = crearPersonal('facundo','brun')

//console.log(persona)
//devuelve facundo brun
/*
const crearPersona = (nombre,apellido) => ( {nombre,apellido} );
const persona = crearPersona('facundo', 'brun')

console.log(persona)

function imprimeArgumento() {
    console.log( arguments );
}
//forma antigua de utilazlo

const imprimeArgumento2 = (...args ) => {
    console.log(args);
}

imprimeArgumento2(10,20,20,'hola',true)
*/
//forma mas nueva de utilizarlo

//rest esta adelante no se puede agregar nada atras
//ej
//**const imprimeArgumento2 = (...args, edad ) => {
//  console.log(args);
//} 
// si se puede pero devuelve por separado
/*
    const imprimeArgumento2 = (edad, ...args ) => {
    console.log(args);
}
*/

const imprimeArgumento2 = (...args ) => {
    console.log(args);
}

const personaje = {
  nombre: 'tony stang',
  edad: 35,
  vivo: false,
  casado: true,
  codeName: 'airomen',
}
//imprimir propiedades

/*const imprimirPersonajes = (personaje) => {
    console.log(personaje.nombre)
    console.log(personaje.edad)
    console.log(personaje.vivo)
    console.log(personaje.casado)
    console.log(personaje.codeName)
}

imprimirPersonajes() */

const imprimirPersonajes = ({personaje}) => {
    
}

imprimirPersonajes()