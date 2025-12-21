const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Juan", edad: 22 },
  { nombre: "Lucía", edad: 15 },
  { nombre: "Pedro", edad: 30 }
];

function edadPersona (personas ){
    if (personas.edad < 18){
        console.log(personas.nombre + 'no podes pasar')
    }
    else {
        console.log(personas.nombre + 'podes pasar')
    }
}

edadPersona(personas[2])
//devuelve a lucia