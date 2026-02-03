

class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
        constructor(nombre,codigo,frase){
            this.nombre = nombre;
            this.codigo = codigo;
            this.frase = frase;
        }

        set setComidaFavorita(comida){
            this.comida = comida;
        }
        get getComidaFavorita(){
            return `la comida favorita de ${ this.nombre } es ${ this.comida}`;
        }
        quienSoy(){
            console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
        }
        miFrase(){
            this.quienSoy();
            console.log(`mi frase es ${this.frase}`)
        }
}

const spiderman = new Persona('peter','spiderman','hola');
const ironman = new Persona('tony','ironman','hola');
console.log( ironman );

spiderman.quienSoy();

spiderman.setComidaFavorita = 'sanguche de milanesa';
// spiderman.comida = 'epstein'


console.log( spiderman );
