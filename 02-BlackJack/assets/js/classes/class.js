

class Persona {
    nombre = '';
    codigo = '';
    frase = '';


        constructor(nombre,codigo,frase){
            this.nombre = nombre;
            this.codigo = codigo;
            this.frase = frase;
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
console.log( spiderman );
console.log( ironman );

spiderman.quienSoy();
ironman.quienSoy();

spiderman.miFrase ();