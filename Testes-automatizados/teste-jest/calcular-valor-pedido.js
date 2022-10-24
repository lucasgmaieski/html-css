// const meuPedido = {
//     itens: [
//         { nome: 'Poção de vida', valor: 100},
//         { nome: 'Espada de prata', valor: 100},
//         { nome: 'Entrega', valor: 40, entrega: true}
//     ]
// }
const acrecidoValorEntrega = 0.2;

const calcularValorPedido = pedido => {
    // console.log(pedido.itens[2].entrega)
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);

    const entrega = pedido.itens.filter(item => item.entrega);
    // console.log(entrega)
    if(pedido.estado === 'RS' || pedido.estado === 'SC') {
        const acrescimoEntrega = entrega[0].valor * acrecidoValorEntrega
        entrega[0].valor += acrescimoEntrega;
    }

    return (valorProdutos > 500) ? valorProdutos : valorProdutos + entrega[0].valor;
    // if(valorProdutos > 500) {
    //     return valorProdutos
    // }else {
    //     return valorProdutos + entrega[0].valor;
    // }
}

module.exports = calcularValorPedido;