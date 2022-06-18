function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var colorido = document.querySelector('section#bgcolorido')
    if (fano.value.length == 0 || Number(fano.value) >ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        //window.alert('tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        // aqui é o mesmo que eu fazer no html -> <img id='foto'>
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            colorido.style.backgroundColor = '#196ddbf8'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto 
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            colorido.style.backgroundColor = 'pink'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto 
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)    // assim eu adiciono o elemento img
    }
}
/*function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = '22'
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${min}:${seg}horas`
    if(hora >= 0 && hora <12){
        //bom dia 
        img.src = 'ecovilledia.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <=18) {
        //boa tarde
        img.src = 'tanguatarde.jpg'
        document.body.style.background = '#b9846f'
    }else {
        //boa noite
        img.src = 'bariguinoite.jpg'
        document.body.style.background = '#515154'
    }

}*/