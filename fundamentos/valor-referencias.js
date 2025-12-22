let a = 10;
let b = a;

//let a = 30;

console.log(a,b)

let juan = { nombre: 'juen'};

let ana = juan;
ana.nombre = 'ana'

console.log({juan , ana})

const cambiaNombre = ( persona ) => {
    persona.nombre = 'tony'
    return persona;
}

let peter = {nombre:'peter'};
let tony = cambiaNombre( peter )

console.log({peter,tony})

//mala pratica

let facundo = { nombre:' facundo '}
let malena = cambiaID({...facundo} )

function cambiaID( persona ){
    persona.nombre = 'nombreCambiado'
    return persona;
}

console.log({ facundo ,malena})

//espero que me devuelva facundo y nombreCambiado

//arreglos

const frutas = ['manzana','pera','mandarina'];

const otrasFrutas = [...frutas]

otrasFrutas.push('naranja');

console.table({frutas,otrasFrutas})