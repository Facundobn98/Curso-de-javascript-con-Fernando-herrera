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
    let numero = numeros[0];
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] < numero){
            numero = numeros[i]
        }
    }
}
numeroChico(1,2,3,4,5,6,7)

//ejercicio 5

const contadorMayores = (...numeros) => {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > 10){
            contador++
        }
    }
    return contador;
}

contadorMayores(10,2,33,45,6,7,88)

//ejercicio 6

const contadorPares = (...numeros) => {
    let contadorP = 0;
    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            contadorP = contadorP + 1;
        }
    }
    return contadorP
}

contadorPares (1,2,3,4,5,6,7,8,9,10)