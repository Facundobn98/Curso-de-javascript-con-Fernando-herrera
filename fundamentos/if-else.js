let a = 15;

if ( a>10 ){ // undefined, null, una asignacion
    console.log('A es mayor a 10')
}
else {
    console.log('es menor a 10')
}

//console.log('fin del programa')

const hoy = new Date();
let dia = hoy.getDate(); //0: Domingo, 1: lunes, 2: martes, 3: Miercoles...

console.log({ dia })

if (dia === 0){
    console.log('es Domigon')
}
else {
    if ( dia === 1){
        console.log('no es domingo ni lunes')
    }
    console.log('no es domingo')
}
// = asignacion
// == igual
// === identico

if (dia === 0){
    console.log('es Domigon')
}
else  {
    console.log('no es domingo')
}

// sin usar if ,else o switch, unicamente objetos
// dia de la semana 3
dia = 6;
const diaLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
};
console.log( diaLetras[dia] || 'dia no definido')
//operador OR 