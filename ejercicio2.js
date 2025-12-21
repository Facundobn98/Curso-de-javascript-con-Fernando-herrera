const productos = [
  { nombre: "Pan", precio: 500 },
  { nombre: "Leche", precio: 800 },
  { nombre: "Queso", precio: 1500 }
];

function mostraPrecio (productos){
    if (productos.precio > 1000){
        console.log(productos.nombre + 'es mas cara')
    }
    else {
        console.log(productos.nombre +'es mas barato')
    }
}

mostraPrecio(productos[2])