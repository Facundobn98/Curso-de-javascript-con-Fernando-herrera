/**Mostrar por consola al menos una vez el número 1, y luego detenerse.
 * 
 */
let numero = 1;
do {
    console.log(numero);
    numero++;
}while ( numero === 1);
//
let menu = 0;

do {
    console.log('menu mostrado');
    menu++;
}while( menu === 0);
//
let n = 1;

do {
    console.log(n);
    n++
}while(n <= 3)
//
let n2 = 3;
do {
    console.log(n2); // se imprime antes de evaluar la condición del while
    n2++;
} while (n2 <= 5);
//
let opcion;

do {
  opcion = prompt(
    "Elegí una opción:\n1 - Saludar\n2 - Despedirse\n3 - Salir"
  );

  if (opcion === "1") {
    console.log("Hola");
  } else if (opcion === "2") {
    console.log("Chau");
  }

} while (opcion !== "3");
//
let numero;

do {
  numero = Number(prompt("Ingresá un número mayor a 0"));
} while (numero <= 0 || isNaN(numero));

console.log("Número válido:", numero);
//
let password;
const passwordCorrecta = "1234";

do {
  password = prompt("Ingresá la contraseña");
} while (password !== passwordCorrecta);

console.log("Acceso concedido 🔓");
