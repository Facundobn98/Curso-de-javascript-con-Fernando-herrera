(() =>{
    'use strict'
    
    // Mazo de cartas
    let deck = [];

    // Palos y cartas especiales
    const tipos = ['C','D','H','S'];
    const especiales = ['A','J','Q','K'];

    // Puntos del jugador y la computadora
    let puntosJugador = 0;
    let puntosComputadora = 0;

    // Botones
    const btnPedir = document.querySelector('#btnPedir');
    const botonDetener = document.querySelector('#btnDetener');
    const botonNuevo = document.querySelector('#btnNuevo');
    const soborno = document.querySelector('#soborno');

    // Contenedores de cartas
    const divCartasJugador = document.querySelector('#jugador-cartas');
    const divCartasComputadora = document.querySelector('#cartas-computadora');

    // Elementos HTML para mostrar puntos
    const puntosHTML = document.querySelectorAll('small');

    // Crea y mezcla el mazo
    const crearDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push(especial + tipo);
            }
        }
        return _.shuffle(deck);

    }

    crearDeck();

    // Saca una carta del mazo
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    // Obtiene el valor de una carta
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
    }

    // Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();
            puntosComputadora += valorCarta(carta);
            puntosHTML[1].innerText = puntosComputadora;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasComputadora.append(imgCarta);

            if (puntosMinimos > 21) break;

        } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) alert('nadie gana');
            else if (puntosMinimos > 21) alert('computadora gana');
            else if (puntosComputadora > 21) alert('jugador gana');
            else alert('computadora gana');
        }, 50);
    };

    // Evento pedir carta
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador += valorCarta(carta);
        puntosHTML[0].innerText = puntosJugador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);

        if (puntosJugador >= 21) {
            btnPedir.disabled = true;
            botonDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    // Evento detener
    botonDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        botonDetener.disabled = true;
        turnoComputadora(puntosJugador);
    });

    // Evento nuevo juego
    botonNuevo.addEventListener('click', () => {
        console.clear();
        deck = crearDeck();

        puntosJugador = 0;
        puntosComputadora = 0;

        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

        divCartasJugador.innerHTML = '';
        divCartasComputadora.innerHTML = '';

        btnPedir.disabled = false;
        botonDetener.disabled = false;
    });

    // Evento trampa 
    soborno.addEventListener('click', () => {
        deck = crearDeck();

        puntosJugador = 21;
        puntosComputadora = 0;

        puntosHTML[0].innerText = 21;
        puntosHTML[1].innerText = 0;

        divCartasJugador.innerHTML = '';
        divCartasComputadora.innerHTML = '';

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/comodin.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);

        setTimeout(() => {
            alert('Victoria!');
        }, 75);
    });

})();