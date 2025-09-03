let personaje = {
  nombre: 'tony stang',
  edad: 35,
  vivo: false,
  casado: true,
  codeName: 'airomen',
  cordenadas: {
    latitud: 30.0,
    longitud: -30.0,
  },
  trajes: [
   'armadura1',
   'armadura2',
   'armadura3'
  ],
  direccion: {
    ubicacion: 'avenida siempre viva',
    numero: 1465,
  },
  ultima_pelicula: 'infiny paz',
};
const casado = true
const x = 'vivo'
//console.log(personaje.nombre, personaje.edad, personaje.codeName,'esta vivo?', personaje.vivo);
//console.log(personaje.trajes)
//console.log('y vive en ', personaje.direccion ,)

//console.log('la cantidad de trajes que tiene ironmen es:', personaje.trajes.length)
//cantidad de armaduras que tiene ironmen
//console.log('el ultimo traje es:', personaje.trajes[personaje.trajes.length -1] )

//console.log('la ultima pelicula es:', personaje.ultima_pelicula)


// mas detalles

const entriesprice = Object.entries( personaje)
//Toma un objeto y lo convierte en un array de pares [clave, valor]
//Diferencia con Object.keys() y Object.values()

//Object.keys(obj) > devuelve solo las claves

//Object.values(obj) > devuelve solo los valores

//Object.entries(obj) > devuelve los pares clave-valor

console.log( entriesprice )
//devuelve un array de arrays, donde cada subarray es un [clave, valor] del objeto.

//console.log ( personaje)

Object.freeze( personaje )
//se usa para congelar un objeto, es decir, hacerlo inmutable

personaje.dinero = 1000000

console.log( personaje )
// gracias a .freeze 

const propiedades = Object.getOwnPropertyNames( personaje)
//sirve para obtener un array con todos los nombres de las propiedades propias de un objeto, incluyendo las que no son enumerables.
console.log(Object.keys(personaje))