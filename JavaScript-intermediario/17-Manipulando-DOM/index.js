function adicionarComentario() {
    let inputComentario = document.getElementsByName('novo-comentario');
    // console.log(inputComentario)

    let textoDigitado = inputComentario[0].value;
    console.log(textoDigitado)

    let novosComentarios = document.getElementById('novos-comentarios');

    console.log(novosComentarios.innerHTML)

    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado}</p>`
    novosComentarios.innerHTML += "<button>pauuu neles</button>"



    let botaoamarelo = document.getElementsByTagName('button')
    // botaoamarelo.style.color = 'white'
    console.log(botaoamarelo)
    botaoamarelo.style.backgroundColor = 'red'
}
