const meuPedido = {
    itens: [
        { nome: 'Poção de vida', valor: 100},
        { nome: 'Espada de prata', valor: 100},
        { nome: 'Entrega', valor: 40, entrega: true}
    ]
}

const calcularValorPedido = pedido => {
    console.log(pedido.itens[2].entrega)
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

    const entrega = pedido.itens.filter(item => item.entrega)
    console.log(entrega)

    if(valorProdutos > 500) {
        return valorProdutos
    }else {
        return valorProdutos + entrega[0].valor;
    }
}
// pedido.itens.reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

// console.log(calcularValorPedido(meuPedido))