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
let suma = 0;
let numero4 = 1;


while ( suma <= 50 ){
    suma = suma + numero4;
    numero4++;
}
console.log(`la suma total es de`,suma)
//5
//Dado este array:
//let numeros = [3, -1, 5, 0, -7, 8];
//Contá cuántos números son mayores que 0 usando while.

let numeros = [3, -1, 5, 0, -7, 8];

let i =0;
let contador = 0;

while(i < numeros.length){
    if (numeros[i]>0){
        contador++
    }
    i++
}
console.log(contador)

//6
//Dada la palabra:
//let palabra = "javascript";
//Mostrá cada letra una por una usando while.

let palabra = "javascript";
let is = 0;

while ( is < palabra.length){
    console.log(palabra[is]);
    is++;
}

