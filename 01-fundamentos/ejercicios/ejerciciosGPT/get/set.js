class Persona {
    nombre;
    constructor(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(valor){
        if (valor === '') return ;
        this._nombre = valor;
    }
}
const p = new Persona('juan')
p.nombre = '';
console.log(p.nombre);