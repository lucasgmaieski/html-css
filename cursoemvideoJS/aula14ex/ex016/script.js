function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[Erro] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)     //mesmo sendo numeros ainda tem que converter os dados pra numero
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0 ){
            window.alert('Passo inválido! Considerando PASSO 1')
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`              // emoji sempre tem que ser entre crases
            }
        }else if (i > f){
            //contagem regrassiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}  \u{1F449}`
            }
        }else {
            res.innerHTML += `\u{1F449} ${i}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
    
}