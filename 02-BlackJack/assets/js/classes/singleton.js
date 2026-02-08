class Singleton {
    static instancia; // undefined
    nombre = '';

    constructor( nombre = '' ){
    if (!!Singleton.instancia){
        return Singleton.instancia;
    }
     Singleton.instancia = this;
     this.nombre = nombre;
    }
}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('spiderman');
const instancia3 = new Singleton('thor');


console.log(`nombre en la instancia es: ${instancia1.nombre}`);
console.log(`nombre en la instancia es: ${instancia2.nombre}`);
console.log(`nombre en la instancia es: ${instancia3.nombre}`);
