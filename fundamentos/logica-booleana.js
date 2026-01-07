const regresaTrue = () => {
    console.log('regresa true')
    return true;
}
const regresaFalse = () => {
    console.log('regresa false')
    return false;
}

console.warn('not o la negacion')
console.log( true ) // true
console.log( !false ) // true
console.log( !true ) // false

console.log( !regresaFalse() ) // true

console.warn('And') // true si todos los valores son verdaderos
console.log( true && true);// true
console.log( true && false);// false
console.log( true && !false);// true

console.log('=====')
console.log( regresaFalse() && regresaTrue());

console.log('== && ==')
console.log('4 condiciones',true && true && true && false)// false
regresaFalse() && regresaTrue();

console.warn('OR');
console.log( true||false);// true
console.log(false||false); // false
console.log(false||true); // true


console.log( regresaTrue() && regresaFalse())
console.log('4 condiciones',true || true || true || false)// true
