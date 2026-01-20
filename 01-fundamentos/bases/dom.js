let titulo = document.getElementById('h1')

titulo.addEventListener('click', alerta)


function alerta(e){
    let titulo1 = document.createElement('button')
    titulo.appendChild(titulo1)
    console.log(e)
}

//// ==============================
// DOM – notas personales
//// ==============================

// El DOM es la forma que tiene JavaScript de acceder al HTML
// Nos permite leer, cambiar y crear elementos desde JS


// ==============================
// SELECCIONAR ELEMENTOS
// ==============================

// Busco un elemento por id
let titulo = document.getElementById('titulo');

// Busco el primer elemento que coincida con un selector CSS
let parrafo = document.querySelector('.parrafo');

// Busco todos los elementos que coincidan
// Devuelve algo parecido a un array
let items = document.querySelectorAll('li');


// ==============================
// CAMBIAR CONTENIDO
// ==============================

// Cambia solo el texto
titulo.textContent = 'Nuevo título';

// Permite escribir HTML adentro (usar con cuidado)
parrafo.innerHTML = '<strong>Texto en negrita</strong>';


// ==============================
// ESTILOS Y CLASES
// ==============================

// Cambiar estilos desde JS
titulo.style.color = 'red';
titulo.style.fontSize = '24px';

// Manejar clases CSS
titulo.classList.add('activo');
titulo.classList.remove('activo');
titulo.classList.toggle('activo');


// ==============================
// CREAR ELEMENTOS
// ==============================

// Creo un elemento HTML (todavía no aparece en la página)
let nuevoParrafo = document.createElement('p');

// Le agrego contenido
nuevoParrafo.textContent = 'Este párrafo lo creé desde JavaScript';

// Lo agrego al DOM (ahora sí se ve)
document.body.appendChild(nuevoParrafo);


// ==============================
// OTRO EJEMPLO
// ==============================

let boton = document.createElement('button');
boton.textContent = 'Click acá';

document.body.appendChild(boton);


// ==============================
// ELIMINAR ELEMENTOS
// ==============================

// Elimina el elemento del DOM
boton.remove();


// ==============================
// IDEA CLAVE (para acordarse)
// ==============================

// 1) Selecciono algo
// 2) Lo cambio o creo algo nuevo
// 3) Lo agrego o lo saco del DOM
