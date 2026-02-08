
class Persona {

    static porObjeto ({nombre,apellido,pais}){
        return new Persona( nombre, apellido, pais);
    }
    constructor ( nombre, apellido, pais ){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }
    getInfo() {
        console.log(`info: ${this.nombre},${this.apellido},${this.pais }`)
    }
}


const nombre1 = 'melisa',
      apellido1 = 'flores',
      pais1 = 'argentina'  ;

const fhaq = {
    nombre: 'facundo',
    apellido: 'brun',
    pais: 'argentina'
};
const male = {
    nombre: 'Malena',
    apellido: 'brun',
    pais: 'argentina'
};
const Persona1 = new Persona( nombre1, apellido1, pais1 );
const Persona2 = Persona.porObjeto( fhaq );
const Persona3 = Persona.porObjeto( male )

Persona1.getInfo();
Persona2.getInfo();
Persona3.getInfo();
