/**
 * 2c = two of clubs
 * 2d = two of diaminds 
 * 2h = two of hearts 
 * 2s = two of spades 
 */

// Creamos un array vacío donde vamos a guardar todas las cartas
let deck = [];

// Palos de las cartas:
// C = Clubs (Tréboles)
// D = Diamonds (Diamantes)
// H = Hearts (Corazones)
// S = Spades (Picas)
const tipos = ['C','D','H','S'];

// Cartas especiales (las que no son numéricas)
const especiales = ['A','J','Q','K'];

// Función que crea el mazo de cartas
const crearDeck = (  ) => {

    // Primer FOR:
    // Recorre los números del 2 al 10
    for( let i = 2; i <= 10; i++ ) {

        // Segundo FOR:
        // Recorre cada tipo (palo)
        for(let tipo of tipos) {

            // Concatenamos el número con el tipo
            // Ejemplo: 2C, 5H, 10S
            deck.push( i + tipo);
        }
    }

    // Segundo bloque:
    // Recorremos los tipos nuevamente
    for(let tipo of tipos){

        // Recorremos las cartas especiales
        for( let especial of especiales)

            // Concatenamos la carta especial con el tipo
            // Ejemplo: AC, KD, QH
            deck.push ( especial + tipo);
    }

    // Mostramos el deck completo en consola
    console.log( deck )
}

// Llamamos a la función para que se ejecute
crearDeck(  );
