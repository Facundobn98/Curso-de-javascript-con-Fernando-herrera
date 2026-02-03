const fher = {
    nombre: 'facundo',
    edad: 27,
    imprimir(){
        console.log(`nombre: ${this.nombre} - edad: ${ this.edad}`);
    }
}

const pedro = {
    nombre: 'pedro',
    edad: 17,
    imprimir(){
        console.log(`nombre: ${this.nombre} - edad: ${ this.edad}`);
    }
}

//fher.imprimir();
// ok esto se debe de crear con la palabra new
function persona(nombre,edad){
    console.log('se ejecuto esta linea')
    this.nombre = nombre;
    this.edad = edad
    this.imprimir = function(){
        console.log(`nombre: ${this.nombre} - edad: ${ this.edad}`);
    }
}

const maria = new persona('maria', 18);
const male = new persona('male', 22);

//console.log(maria);
maria.imprimir();
male.imprimir();
