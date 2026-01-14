const pedidos = [
    { cliente: 'sofia', total: 3000},
    { cliente: 'facundo', total: 7000},
    { cliente: 'malena', total: 1000}
];

function estadoPedido(pedidos){
    if (pedidos.total > 5000){
        console.log(pedidos.cliente + 'tenes pedido gratis')
    }
    else {
        console.log(pedidos.cliente + 'tu pedido tendra sobrecargo de envio')
    }
}

estadoPedido(pedidos[2])
//recibe malena