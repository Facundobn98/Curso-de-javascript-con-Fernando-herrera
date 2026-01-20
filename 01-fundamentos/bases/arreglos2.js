// =======================
// ARRAYS
// =======================

let arreglo = [
    'hola',
    'buenos dias',
    123,
    'hola2'
]

// Los arrays arrancan en 0
// 0 -> hola
// 1 -> buenos dias
// 2 -> 123
// 3 -> hola2
console.log(arreglo[2]) // 123



let juegos = [
    'minecraft',
    'fornite',
    'mario',
    [1, 2, 3, 4, 'holis']
]

// Array dentro de array
// Primero el array grande, después el de adentro
console.log(juegos[3][3]) // 4



// =======================
// AGREGAR / BORRAR
// =======================

// Agrega al final
juegos.push('orizon')

// Agrega al principio
juegos.unshift('HolaSoyUnshift')

// Borra el último
juegos.pop()

// Borra el primero
juegos.shift()



// =======================
// SPLICE
// =======================

// splice(posición, cantidad)
// Arranca desde la posición y borra lo que digas
let posicion = 1
juegos.splice(posicion, 1)



let numeros = [10, 20, 30, 40, 50]

// Desde la posición 1 borra 2 (20 y 30)
numeros.splice(1, 2)
console.log(numeros) // [10, 40, 50]



let letras = ["a", "b", "c", "d"]

// Borra "c" y pone "z"
letras.splice(2, 1, "z")
console.log(letras) // ["a", "b", "z", "d"]



let frutas = ["manzana", "banana", "pera"]

// No borra nada, solo mete "kiwi"
frutas.splice(1, 0, "kiwi")
console.log(frutas)



// =======================
// BUSCAR
// =======================

let juegos2 = ['minecraft', 'mario', 'fornite']

// indexOf te dice en qué lugar está
// Si no está → -1
let minecraft = juegos2.indexOf('minecraft')

console.log(minecraft) // 0



// =======================
// EXTRA QUE SÍ SE USA
// =======================

// Recorrer un array
for (let i = 0; i < juegos2.length; i++) {
  console.log(juegos2[i])
}

// Preguntar si existe
juegos2.includes('mario') // true

// Copiar array (esto evita cagadas)
let copia = [...juegos2]
