const usuarios = [
  { nombre: "Carlos", activo: true },
  { nombre: "María", activo: false },
  { nombre: "Luis", activo: true }
];

function estadoUsuario (usuarios){
    if (usuarios.activo === true){
        console.log(usuarios.nombre + 'esta activo')
    }
    else {
        console.log(usuarios.nombre + 'esta inactivo')
    }
}

estadoUsuario(usuarios[2])
//tiene que devolverme maria esta activa//