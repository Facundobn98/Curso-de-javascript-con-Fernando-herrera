// function saludar() {
//     console.log('hola mundo')
// };
// saludar()

// const saludar1 = function( nombre ) {
//     console.log('hola' + nombre );
// }
// saludar1(' facundo ')

// const saludar2 = (nombre) => {
//     console.log('hola2' + nombre )
// }
// saludar2(' ariel ')

// const funcionFlecha = () => {
//     console.log('hola funcion flecha')
// }
// funcionFlecha()

// si no tiene el return explicito , devuelve nodefinido 

function saludar() {
    console.log('hola mundo')
    return 1;
};
saludar()


const saludar1 = function( nombre ) {
    console.log('hola' + nombre );
}
saludar1(' facundo ')


const saludar2 = (nombre) => {
    console.log('hola2' + nombre )
}
saludar2(' ariel ')


const funcionFlecha = () => {
    console.log('hola funcion flecha')
}
funcionFlecha()


const sumar = (a,b) => {
    return a + b;
}
 
const sumar1 = (a,b) => a + b;

console.log(sumar(10,20))
console.log(sumar1(20,30))

function getaleatorio() {
    return Math.random()
}

console.log(getaleatorio)

//tarea pasarla a funcion flecha

const numeroAleatorio = () => Math.random(); 

