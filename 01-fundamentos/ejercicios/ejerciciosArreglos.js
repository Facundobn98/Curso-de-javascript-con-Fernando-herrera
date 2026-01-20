//// Ejercicio 1
// Acceso y lectura básica
// Creá un arreglo con al menos 5 elementos mezclados
// Mostrá por consola:
// - El primer elemento
// - El último elemento (sin escribir el índice a mano)

let arreglo = ['gato', 'perro', 'pajaro', 'gallina', 'chancho'];

console.log(arreglo[0]); // primer elemento
console.log(arreglo[arreglo.length - 1]); // último elemento


//// Ejercicio 2
/**
 * Dado este arreglo:
 * let colores = ['rojo', 'verde', 'azul', 'amarillo'];
 * Mostrá por consola:
 * - La longitud del arreglo
 * - El elemento que está en la mitad del arreglo
 */

let colores = ['rojo', 'verde', 'azul', 'amarillo'];

console.log(colores.length);

let mitad = colores.length / 2;
console.log(colores[mitad]);


//// Ejercicio 3
/**
 * Creá un arreglo que tenga:
 * - 3 strings
 * - Un arreglo interno con 5 números
 * Mostrá por consola:
 * - Un elemento del arreglo principal
 * - Un número específico del arreglo interno
 */

let arregloTres = ['mario', 'luigi', 'spiderman', [1, 2, 3, 4, 5]];

console.log(arregloTres[1]);
console.log(arregloTres[3][3]);


//// Ejercicio 4
/**
 * Dado el siguiente arreglo:
 * let datos = ['texto', 50, [10, 20, 30, 40]];
 * Mostrá por consola:
 * - El número 30
 * - La suma de los dos primeros números del arreglo interno
 */

let datos = ['texto', 50, [10, 20, 30, 40]];

console.log(datos[2][2]);

let suma = datos[2][0] + datos[2][1];
console.log(suma);


//// Ejercicio 5
/**
 * Creá un arreglo vacío y:
 * - Agregá 3 elementos usando push
 * - Agregá 1 elemento al inicio usando unshift
 * - Mostrá el arreglo final por consola
 */

let arregloVacio = [];

arregloVacio.push('hola', 'soy', 'Facundo');
arregloVacio.unshift('elementoInicio');

console.log(arregloVacio);


//// Ejercicio 6
/**
 * Dado este arreglo:
 * let tareas = ['estudiar', 'comer', 'entrenar', 'dormir'];
 * - Eliminá el último elemento
 * - Eliminá el primer elemento
 * - Guardá ambos elementos eliminados en variables
 * - Mostralos por consola
 */

let tareas = ['estudiar', 'comer', 'entrenar', 'dormir'];

let ultimoEliminado = tareas.pop();
let primeroEliminado = tareas.shift();

console.log(ultimoEliminado);
console.log(primeroEliminado);
console.log(tareas);


//// Ejercicio 7
/**
 * Dado este arreglo:
 * let numeros = [1, 2, 3, 4, 5, 6];
 * Usando splice:
 * - Eliminá los números 3 y 4
 * - Mostrá el arreglo resultante
 */

let numeros = [1, 2, 3, 4, 5, 6];

numeros.splice(2, 2);

console.log(numeros);


//// Ejercicio 8
/**
 * Dado este arreglo:
 * let nombres = ['Ana', 'Juan', 'Pedro', 'Lucia'];
 * Usando splice:
 * - Reemplazá 'Pedro' por 'Carlos'
 * - Sin cambiar el orden del resto
 */

let nombres = ['Ana', 'Juan', 'Pedro', 'Lucia'];

nombres.splice(2, 1, 'Carlos');

console.log(nombres);
