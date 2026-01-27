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

// ejercicio 7
//contar hasta que el numero sea positivo

let numeroUsuario = -3;

while(numeroUsuario < 0){
    numeroUsuario++;
    console.log(`el numero es ${numeroUsuario}`)
};

console.log(`el numero de usuario es ${numeroUsuario}`);


//ejercicio 8
//Buscar un numero especifico en el array '16'

let numerosEJ8 = [4, 8, 15, 16, 23, 42];
let ij8 = 0;

let encontrado = false;

while (ij8 < numerosEJ8.length) {
    if (numerosEJ8[ij8] === 16) {
        console.log(`encontrado en la posicion ${ij8}`);
        encontrado = true;
        break;
    }
    ij8++;
}

if (!encontrado) {
    console.log("No encontrado");
}
//ejercicio 9
//Este ejercicio hace que el while deje de ser solo recorrer y 
//empiece a controlar un estado. Acá se da otro salto.

let energia = 10;

while (energia > 0) {
    energia--;
    console.log(`la energia es de ${energia}`);
}

console.log('energia agotada');
