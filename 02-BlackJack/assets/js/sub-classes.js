class Persona {
    static _Conteo = 0;
    static get Conteo(){
        return Persona._Conteo + 'instancias';
    }
    static mensaje(){
        console.log( this.nombre );// undefined
        console.log('hola soy metodo estatico');
    }
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
        constructor(nombre,codigo,frase){
            this.nombre = nombre;
            this.codigo = codigo;
            this.frase = frase;

            Persona._Conteo++;
        };
        set setComidaFavorita(comida){
            this.comida = comida;
        };
        get getComidaFavorita(){
            return `la comida favorita de ${ this.nombre } es ${ this.comida}`;
        };
        quienSoy(){
            console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
        };
        miFrase(){
            this.quienSoy();
            console.log(`mi frase es ${this.frase}`)
        };
};
class Heroe extends Persona{
    clan;
    
    constructor (nombre,codigo,frase){

        super(nombre,codigo,frase)
        this.clan = 'los vengadores';                   
    };
    quienSoy(){
        console.log(`soy ${this.nombre},${this.clan} `);
        super.quienSoy();
    }
};
//const spiderman = new Persona('peter','spiderman','hola');
const spiderman = new Heroe();
console.log(spiderman);