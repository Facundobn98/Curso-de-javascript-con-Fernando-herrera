//1
//Pedir una edad y mostrar “Puede entrar”
//si la edad es menor a 12 O mayor a 65.

let edad = 10;

if (edad < 12 || edad > 65){
    console.log('podes pasar')
}

// Mostrar
// “Día libre” si el día es sábado O domingo.


let dia2 = 'sabado';

if (dia2 == 'sabado' || dia2 == 'domingo'){
    console.log('dia libre')
}

let temperatura = 5;

if (temperatura < 10 || temperatura < 30){
    console.log('llevar abrigo')     
}
//2
// mostrar 'numero valido' si es numero 0 o 100

let numero = 100;

if (numero === 0 || numero === 100) {
    console.log('numero valido');
}
//
//Mostrar “Acceso permitido”
//si el usuario es admin O moderador.

let rol = "admin";

if( rol === 'admin'|| rol === 'moderador'){
    console.log('acceso permitido')
}
//Aplicar descuento si el precio
//es menor a 1000 O mayor a 5000.

let precio = 6000;

if (precio < 1000 || precio > 5000){
    console.log('descuento aceptado')
}
