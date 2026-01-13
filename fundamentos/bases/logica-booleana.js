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

console.warn('Asignaciones')
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'hola mundo';
const a2 = 'hola' && 'mundo' && soyFalso && true;
const a3 = soyFalso || 'ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'ya no soy falso' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy false de nuevo' || true;


console.log({a1,a2,a3,a4,a5});