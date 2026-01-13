//Mostrá en consola los números del 1 al 10 usando for.
//1
let numeros = [1,2,3,4,5,6,7,8,9,10]

for (let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}
//2
//Mostrá en consola los números del 10 al 1.

let numeros2 = [30,20,10]

for (let i = numeros2.length - 1; i>=0;i--) {
    console.log(numeros[i])
}
//3
//Mostrá solo los números pares del 1 al 20.

let numeros3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (let i = 0;i<numeros3.length; i++){
    if (numeros3[i] % 2 === 0){
        console.log(numeros3[i])
    }
}
// 4
// Contar hasta un número dado

let limite = 7;

for (let i = 1; i <= limite; i++) {
    console.log(i)
}
//5
//Del 1 al 10, mostrá solo los números mayores a 5.

let numeros4 = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros4.length;i++){
    if (numeros4[i] > 5){
        console.log(numeros4[i])
    }
}