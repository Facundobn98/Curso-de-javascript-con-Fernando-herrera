const turnos = [
    {nombre: 'micaela',urgente:true},
    {nombre:'facundo',urgente:true},
    {nombre:'malena',urgente:false}
]

function estadoUrgencia(turnos){
    if (turnos.urgente === true){
        console.log(turnos.nombre + 'pasa que es urgente')
    }
    else {
        console.log(turnos.nombre + 'no tenes urgencia')
    }
}

estadoUrgencia(turnos[0])
// devuelve micaela 


let estadoUrgencia = (turnos) => {
    if (turnos.urgente === true){
        console.log(turnos.nombre + 'pasa que es urgente')
    }
    else {
        console.log(turnos.nombre + 'no tenes urgencia')
    }
}
estadoUrgencia(turnos[1])
//devuelve facundo