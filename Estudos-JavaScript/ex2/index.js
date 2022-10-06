
let boletoPago = false
function verificaPagamento(nomePagador = 'Gasparzinho' ){
    let nomeGuardado = nomePagador

    if(boletoPago == false) {
        alert('Seu boleto ainda não foi pago, por favor clique no botão abaixo para pagar')

    } else {
        alert('O boleto foi pago pelo caríssimo(a) e digníssimo(a) ' + nomeGuardado)
    }
}

function pagarBoleto() {
    boletoPago = true
    const nome = prompt('Informe seu nome:')
    if(nome === null || nome == '') {
        verificaPagamento()
    } else {
        verificaPagamento(nome)
    }
    
}

