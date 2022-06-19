function carregar(){
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

}