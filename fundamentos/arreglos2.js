let arreglo = [
    'hola',
    'buenos dias',
    123,
    'hola2'
]

console.log(arreglo[2])
// 123 es lo que muestra

let juegos = ['minecraft','fornite','mario',
    [1,2,3,4,'holis']
]

console.log(juegos[3][3])


// forma de mostrar un elemento dentro de un arreglo que tambien esta dentro del arreglo

let nuevaLongitud = juegos.push(' orizon ')
// .push sirve para agregar en el ultimo lugar uno o mas elementos a una lista

nuevaLongitud = juegos.unshift('HolaSoyUnshift')

// .unshift sirve para agregar en el primer lugar uno o mas elementos en la lista

let juegoBorrado = juegos.pop();
// .pop sirve para eliminar el ultimo elemento de la lista

let juegoBorrado2 = juegos.shift();
// .eliminar el primer elemento de la lista

let posicion = 1;

juegos.splice(pos , 1)

let numeros = [10, 20, 30, 40, 50];

// borrar desde posición 1 (20) y eliminar 2 elementos
numeros.splice(1, 2);
console.log(numeros); 
// [10, 40, 50]

let letras = ["a", "b", "c", "d"];

// desde la posición 2 (c), eliminar 1 y agregar "z"
letras.splice(2, 1, "z");
console.log(letras); 
// ["a", "b", "z", "d"]

let frutas = ["manzana", "banana", "pera"];

// desde la posición 1, no elimines nada y agrega "kiwi"
frutas.splice(1, 0, "kiwi");
console.log(frutas);
// ["manzana", "kiwi", "banana", "pera"]
// no borro nada , solo agrego
// se declara una variable para dar un posicio y con splice()
//borrar desde la posicion mas la cantidad que pongas


let juegos = [
  'minecraft',
  'mario',
  'fornite'
]
let minecraft = juegos.indexOf('minecraft')


console.log(minecraft)
// indexOf me da el lugar del elemento que estoy buscando , tener en cuenta que las mayusculas importan /
// -1 significa que no lo encontro


