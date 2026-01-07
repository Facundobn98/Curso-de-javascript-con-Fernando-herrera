/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

//entra a un sitio web , para consultar si esta abierto hoy

const dia = 0; // 0: domigo... , 1:lunes...
const horaActual = 10;

let horaApertura = 11;
let mensaje;// esta abierto, esta cerrado, hoy abrimos a las XX

//if (dia === 0 || dia === 6){
// .include()
//if ([0,6].includes( dia )){
//console.log('fin de semana');
//    horaApertura = 9;
//} else {
//    console.log('dia de semana')
//    horaApertura = 11;
//
//}

horaApertura = ([0,6].includes( dia ) ) ? 9 : 11;


if ( horaActual >= horaApertura ){
    mensaje = 'esta abierto'
} else {
    mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`;
}
mensaje = horaActual >= horaApertura ? 'esta abierto' : `esta cerrado y abrimos a las ${horaApertura}`;