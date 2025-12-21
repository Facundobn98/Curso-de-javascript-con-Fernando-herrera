const cuentas = [
  { titular: "Facundo", saldo: 5000 },
  { titular: "Malena", saldo: 12000 },
  { titular: "Juan", saldo: 3000 }
];


function estadoCuenta(cuentas){
    if (cuentas.saldo >= 10000){
        console.log(cuentas.titular + 'tiene saldo suficiente')    
   }
    else {
        console.log(cuentas.titular + 'no tiene saldo suficiente')
    }
}
 estadoCuenta(cuentas[2])
 //muestra a juan