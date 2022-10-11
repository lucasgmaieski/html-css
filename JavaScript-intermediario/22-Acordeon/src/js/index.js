const resposta1 = document.querySelector(".resposta1");
const resposta2 = document.querySelector(".resposta2");
const resposta3 = document.querySelector(".resposta3");
// const botao1 = document.getElementsByClassName("botao1");
const botao1 = document.querySelector(".botao1")
const botao2 = document.querySelector(".botao2")
const botao3 = document.querySelector(".botao3")
console.log(botao1)
console.log(botao2)
console.log(resposta1)
let aberto = 0;
botao1.addEventListener ('click', function() {
    let pegasrc = botao1.getAttribute('src');
    if (pegasrc === 'src/imagens/icone-seta-fechada.png'){
        botao1.setAttribute('src', 'src/imagens/icone-seta-aberta.png');
        resposta1.classList.replace('fechada', 'aberta');
        aberto = 1;
        console.log('Abriu o um' )
        fechaOsOutros(aberto);
    } else {
        aberto =0;
        fechaOsOutros(aberto);
    }
})

botao2.addEventListener ('click', function() {
    let pegasrc = botao2.getAttribute('src');
    if (pegasrc === 'src/imagens/icone-seta-fechada.png'){
        botao2.setAttribute('src', 'src/imagens/icone-seta-aberta.png');
        resposta2.classList.replace('fechada', 'aberta');
        aberto = 2;
        console.log(botao2.getAttribute('src'))
        fechaOsOutros(aberto);
    } else {
        aberto =0;
        fechaOsOutros(aberto);
    }
})

botao3.addEventListener ('click', function() {
    let pegasrc = botao3.getAttribute('src');
    if (pegasrc === 'src/imagens/icone-seta-fechada.png'){
        botao3.setAttribute('src', 'src/imagens/icone-seta-aberta.png');
        resposta3.classList.replace('fechada', 'aberta');
        aberto = 3;
        console.log(botao3.getAttribute('src'))
        fechaOsOutros(aberto);
    } else {
        aberto =0;
        fechaOsOutros(aberto);
    }
})

function fechaOsOutros(quemTaAberto) {
    if(quemTaAberto === 0){
        botao1.setAttribute('src', 'src/imagens/icone-seta-fechada.png');
        botao2.setAttribute('src', 'src/imagens/icone-seta-fechada.png');
        botao3.setAttribute('src', 'src/imagens/icone-seta-fechada.png');
        resposta1.classList.replace('aberta', 'fechada');
        resposta2.classList.replace('aberta', 'fechada');
        resposta3.classList.replace('aberta', 'fechada');
        console.log('fechou todas')
    }else {
            if(quemTaAberto === 1) {
                botao2.setAttribute('src', 'src/imagens/icone-seta-fechada.png');
                botao3.setAttribute('src', 'src/imagens/icone-seta-fechada.png');
                resposta3.classList.replace('aberta', 'fechada');
                resposta2.classList.replace('aberta', 'fechada');
            }
            if(quemTaAberto === 2) {
                botao1.setAttribute('src', 'src/imagens/icone-seta-fechada.png');
                botao3.setAttribute('src', 'src/imagens/icone-seta-fechada.png');
                resposta1.classList.replace('aberta', 'fechada');
                resposta3.classList.replace('aberta', 'fechada');
            }
            if(quemTaAberto === 3) {
                botao2.setAttribute('src', 'src/imagens/icone-seta-fechada.png');
                botao1.setAttribute('src', 'src/imagens/icone-seta-fechada.png');
                resposta2.classList.replace('aberta', 'fechada');
                resposta1.classList.replace('aberta', 'fechada');
            }

        

    }

}