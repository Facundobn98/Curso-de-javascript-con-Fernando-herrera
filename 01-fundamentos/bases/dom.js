let titulo = document.getElementById('h1')

titulo.addEventListener('click', alerta)


function alerta(e){
    let titulo1 = document.createElement('button')
    titulo.appendChild(titulo1)
    console.log(e)
}
