/**Mostrar por consola al menos una vez el número 1, y luego detenerse.
 * 
 */
let numero = 1;
do {
    console.log(numero);
    numero++;
}while ( numero === 1);
//
let menu = 0;

do {
    console.log('menu mostrado');
    menu++;
}while( menu === 0);
//
let n = 1;

do {
    console.log(n);
    n++
}while(n <= 3)
//
let n2 = 3;
do {
    console.log(n2); // se imprime antes de evaluar la condición del while
    n2++;
} while (n2 <= 5);
