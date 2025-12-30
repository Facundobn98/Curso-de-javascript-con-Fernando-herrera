const ejercicio1 = (...args) => {
    return args.length;
}

ejercicio1(1,2,3,true,false,'hola')
//ejercicio 2
const sumarTodo = (...numeros) => {
    let total = 0
    for (let i = 0;i < numeros.length; i++){
        total = total + numeros[i]
    }
    return total;
}

sumarTodo(1,2,34,5,6)
//ejercicio 3

const numeroGrande = (...numeros) => {
    let numeroG = numeros[0];
    for (let i =0; i < numeros.length; i++){
        if(numeros[i] > numeroG){
            numeroG = numeros[i]
        }
    }
    return numeroG;
}

numeroGrande(1,2,3,4,5,6,7,8,9)
//ejercicio 4

const numeroChico = (...numeros) => {
    let numero = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] < numero){
            numero = numeros[i]
        }
    }
}
numeroChico(1,2,3,4,5,6,7)