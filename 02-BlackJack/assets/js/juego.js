/**
 * 2c = two of clubs
 * 2d = two of diaminds 
 * 2h = two of hearts 
 * 2s = two of spades 
 */

let deck = [];

const crearDeck = (  ) => {
    for( let i = 2;i <= 10; i++ ) {
        deck.push( i + 'C')
    }

    console.log( deck )
}

crearDeck(  ); 