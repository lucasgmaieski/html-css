const calcularValorPedido = require('./calcular-valor-pedido');

it('não deve cobrar valor de frete quando valor dos produtos for superior que 500', () => {
    //AAA  3 PASSOS DE CRIAÇÃO DE UM TESTE

    //ARRANGE - organizar-arrumar
    const meuPedido = {
        itens: [
            { nome: 'arco encantado', valor: 2000},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    // ACT -ação- o que quer testar
    const resultado = calcularValorPedido(meuPedido);

    //ASSERT -asserção - qual o resultado experado
    expect(resultado).toBe(2000)
});

it('deve cobrar valor de frete quando valor dos produtos for menos que 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Sandwich', valor: 50},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(150);
})

it('deve cobrar valor de frete caso valor dos produtos seja exatamente 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Sandwich bem caro', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600);
})

// caso os estados de entraga sejam RS ou SC, deve ser acrecido um valor de 30% na entrega
it('deve adicionar um acrescimo de 20% no valor de entrega no pedido caso o estado seja RS', () => {
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: 'Sandwich bem caro', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoRS);

    expect(resultado).toBe(620);
})

it('deve adicionar um acrescimo de 20% no valor de entrega no pedido caso o estado seja SC', () => {
    const pedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            { nome: 'Sandwich bem caro', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSC);

    expect(resultado).toBe(620);
})

it('não deve adicionar um acrescimo de 20% no valor de entrega no pedido caso o estado seja SP', () => {
    const pedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            { nome: 'Sandwich bem caro', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoSP);

    expect(resultado).toBe(600);
})