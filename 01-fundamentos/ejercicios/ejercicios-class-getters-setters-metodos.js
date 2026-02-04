// class Animal {
//     nombre;
//     tipo;
//     sonido;

//     constructor(nombre, tipo, sonido) {
//         this.nombre = nombre;
//         this.tipo = tipo;
//         this.sonido = sonido;
//     }

//     presentarse() {
//         console.log(
//             `Hola, soy un ${this.tipo} llamado ${this.nombre} y produzco el sonido ${this.sonido}`
//         );
//     }
// }
// const firulais = new Animal('Firulais', 'perro', 'ladrido');
// firulais.presentarse();
//
// class Animal {
//     nombre;
//     tipo;
//     sonido;

//     constructor(nombre, tipo, sonido) {
//         this.nombre = nombre;
//         this.tipo = tipo;
//         this.sonido = sonido;
//     }

//     presentarse() {
//         console.log(
//             `Hola, soy un ${this.tipo} llamado ${this.nombre} y produzco el sonido ${this.sonido}`
//         );
//     }
// }
// const perro = new Animal('Firulais', 'perro', 'ladrido');
// const gato = new Animal('timo', 'perro', 'maullido');
// const loro = new Animal('ramon', 'perro', 'lenguaje humano...');
// const animales = [perro,gato,loro]
// animales.forEach(animal => {
//     animal.presentarse();
// });
// //
// class Usuario {
//     nombre;
//     rol;
//     constructor(nombre,rol){
//         this.nombre = nombre;
//         this.rol = rol;
//     }
//     set setRol(nuevoRol){
//         if (nuevoRol === 'admin' || nuevoRol === 'user'){
//             this.rol = nuevoRol;
//         }
//         else {
//             console.error('rol invalido')
//         }
//     }
//     get info(){
//       return `Usuario: ${this.nombre} | Rol: ${this.rol}`  
//     }
// }
// const u = new Usuario('facundo','admin');
// u.setRol = 'user' 
// console.log(u.info);
//
class Persona {
    nombre;
    edad;
        constructor(nombre,edad){
            this.nombre = nombre;
            this.edad = edad;
        }
        saludar(){
            console.log(`Buenos Dias soy ${this.nombre}y tengo ${this.edad}`)
        }
}

const u1 = new Persona('Facundo','30')
const u2 = new Persona('malena','25')

u1.saludar();
u2.saludar();
