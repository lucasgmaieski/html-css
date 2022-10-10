// style.pointerEvents = 'none'   desabilita os eventos de click no elemento 
let contador = 1
function estadoInicial() {

    let botãoInicial = document.getElementById('left')
    botãoInicial.style.opacity = '0.3'
    botãoInicial.style.pointerEvents = 'none'
}

function ativaBotãoEsquerdo() {
    let botãoInicial = document.getElementById('left')
    botãoInicial.style.opacity = '1'
    botãoInicial.style.pointerEvents = 'auto'
}
function ativaBotãoDireito() {
    let botão = document.getElementById('right')
    botão.style.opacity = '1'
    botão.style.pointerEvents = 'auto'
}
function passarFoto() {
    let fundo = document.getElementById('container')
    let botão = document.getElementById('right')
    let titulo = document.getElementById('titulo')
    contador++
    if (contador == 5) {
        contador--
        return
    } else if (contador == 4) {
        botão.style.opacity = '0.3'
        botão.style.pointerEvents = 'none'
        fundo.classList.add(`container${contador}`)
        fundo.classList.remove(`container${contador - 1}`)
        titulo.innerHTML = `Título imagem ${contador}`
    } else {
        ativaBotãoEsquerdo()
        fundo.classList.add(`container${contador}`)
        fundo.classList.remove(`container${contador - 1}`)
        titulo.innerHTML = `Título imagem ${contador}`
    }

}


function voltarFoto() {
    let fundo = document.getElementById('container')
    let botão = document.getElementById('left')
    let titulo = document.getElementById('titulo')
    contador--
    if (contador == 0) {
        contador++
        return
    }
    else if (contador == 1) {
        botão.style.opacity = '0.3'
        botão.style.pointerEvents = 'none'
        fundo.classList.add(`container${contador}`)
        fundo.classList.remove(`container${contador + 1}`)
        titulo.innerHTML = `Título imagem ${contador}`
    } else {
        ativaBotãoDireito()
        fundo.classList.add(`container${contador}`)
        fundo.classList.remove(`container${contador + 1}`)
        titulo.innerHTML = `Título imagem ${contador}`
    }




}