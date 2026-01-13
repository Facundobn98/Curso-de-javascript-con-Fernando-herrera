//ejercicios con while
//Mostrá por consola los números del 1 al 10 usando while.
let numero = 0;

while ( numero <= 9){
    numero = numero + 1
    console.log(numero)
}
//2
//Mostrá solo los números pares entre 0 y 20.
let numero2 = 20;

while (numero2 >= 0) {
    if (numero2 % 2 === 0) {
        console.log(numero2);
    }
    numero2--;
}
//3
//Mostrá los números del 10 al 1 (cuenta regresiva).
let numero3 = 10;

while ( numero3 >= 1 ){ 
    console.log(numero3);
    numero3 --;

}
//4
//Usá un while que vaya sumando números empezando
//desde 1 hasta que la suma sea mayor o igual a 50.
//Mostrá la suma final.

let numeroSuma = 0;

while ( numeroSuma <= 50 ){
    
    console.log(`NUMERO ${numeroSuma} `)
    numeroSuma++;
}