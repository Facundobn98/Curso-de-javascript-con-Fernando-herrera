
const elMayor = (a,b) => {
    return ( a > b) ? a:b;
}
// const elMayor = a > b ? a : b;
const tieneMembresia = ( miembro ) => (miembro) ? 'dos dolares': '10 dolares';   



console.log(elMayor(17,16))
console.log(tieneMembresia(true));

const amigo = true;

const amigoarr = [
    'peter',
    'tony',
    'fabian',
    amigo ? 'f':'m'
]

console.log( amigoarr )

const nota = 96;// A+ A B+

const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ?  'B+':
              nota >= 80 ?  'B':
              nota >= 75 ?  'C+':
              nota >= 70 ?  'C': 'F';

console.log(nota,grado)















