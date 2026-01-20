// =======================
// ARREGLOS BÁSICOS
// =======================

let arreglo = [
    'hola',
    'buenos dias',
    123,
    'hola2'
]

// Accedemos a un elemento del arreglo usando su posición (índice)
// Los índices empiezan SIEMPRE en 0
// 0 -> 'hola'
// 1 -> 'buenos dias'
// 2 -> 123
// 3 -> 'hola2'
console.log(arreglo[2]) 
// Muestra: 123



// =======================
// ARREGLOS DENTRO DE ARREGLOS
// =======================

let juegos = [
    'minecraft',
    'fornite',
    'mario',
    [1, 2, 3, 4, 'holis'] // este es un arreglo dentro del arreglo
]

// juegos[3] accede al arreglo interno: [1,2,3,4,'holis']
// juegos[3][3] accede al elemento 4 (índice 3) de ese arreglo interno
console.log(juegos[3][3]) 
// Muestra: 4



// =======================
// AGREGAR ELEMENTOS
// =======================

// .push()
// Agrega uno o más elementos AL FINAL del arreglo
// Devuelve la NUEVA longitud del arreglo
let nuevaLongitud = juegos.push('orizon')

// .unshift()
// Agrega uno o más elementos AL INICIO del arreglo
// También devuelve la nueva longitud
nuevaLongitud = juegos.unshift('HolaSoyUnshift')



// =======================
// ELIMINAR ELEMENTOS
// =======================

// .pop()
// Elimina el ÚLTIMO elemento del arreglo
// Devuelve el elemento eliminado
let juegoBorrado = juegos.pop()

// .shift()
// Elimina el PRIMER elemento del arreglo
// Devuelve el elemento eliminado
let juegoBorrado2 = juegos.shift()



// =======================
// SPLICE (EL MÁS IMPORTANTE)
// =======================

// splice(posición, cantidadAEliminar, elementosAAgregar)

// Ejemplo 1: eliminar elementos
let numeros = [10, 20, 30, 40, 50]

// Desde la posición 1 (20), eliminar 2 elementos (20 y 30)
numeros.splice(1, 2)
console.log(numeros) 
// Resultado: [10, 40, 50]



// Ejemplo 2: reemplazar elementos
let letras = ["a", "b", "c", "d"]

// Desde la posición 2 (c)
// Elimina 1 elemento (c)
// Agrega "z" en su lugar
letras.splice(2, 1, "z")
console.log(letras) 
// Resultado: ["a", "b", "z", "d"]



// Ejemplo 3: solo agregar (sin borrar)
let frutas = ["manzana", "banana", "pera"]

// Desde la posición 1
// No elimina nada (0)
// Agrega "kiwi"
frutas.splice(1, 0, "kiwi")
console.log(frutas)
// Resultado: ["manzana", "kiwi", "banana", "pera"]



// =======================
// BUSCAR POSICIONES
// =======================

let juegos2 = [
  'minecraft',
  'mario',
  'fornite'
]

// indexOf()
// Busca un elemento dentro del arreglo
// Devuelve la posición (índice) donde lo encuentra
// Si NO lo encuentra, devuelve -1
// IMPORTANTE: distingue mayúsculas y minúsculas
let minecraft = juegos2.indexOf('minecraft')

console.log(minecraft)
// Resultado: 0
