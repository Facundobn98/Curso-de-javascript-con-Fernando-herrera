/**
 * 2c = two of clubs
 * 2d = two of diaminds 
 * 2h = two of hearts 
 * 2s = two of spades 
 */

let deck = [];
const tipos = ['C','D','H','S']
const especiales = ['A','J','Q','K']


const crearDeck = (  ) => {
    for( let i = 2;i <= 10; i++ ) {
        for(let tipo of tipos) {
            deck.push( i + tipo);
        }
    }
    for(let tipo of tipos){
        for( let especial of especiales)
            deck.push ( especial + tipo);
    }
    console.log( deck )
}

crearDeck(  ); 