console.warn('while')
const autos = ['ford','honda','toyota','amarok']

let i = 0;

while ( i<autos.length ){
    console.log( carros[i] )
    // i = i + 1;
    i++;
}

// undefined
// null
// false

while ( autos[i] ){
    if ( i=== 1){
        //break;
        i++;
        continue;
    }
    console.log( autos[i] );
    i++;
}

console.warn('Do while')
let j = 0;
do {
    console.log(autos[j]);
    j++;
}while( carros[j] );
