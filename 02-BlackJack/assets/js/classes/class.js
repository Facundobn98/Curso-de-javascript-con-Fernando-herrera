

class Persona {
    nombre = '';
    codigo = '';
    frase = '';


        constructor(nombre,codigo,frase){
            this.nombre = nombre;
            this.codigo = codigo;
            this.frase = frase;
        }
}

const spiderman = new Persona('peter','spiderman','hola');
const ironman = new Persona('tony','ironman','hola');
console.log( spiderman )
console.log( ironman )