 function myFunction() {
    alert("Você clicou no café porque é um viciadoooooo");
  }
function Temapraia() {
  document.getElementById("temapraia").style.backgroundImage = "url('BG_praia.jpg')";
  
}

function Temalucas() {
  document.getElementsByClassName("temalucas")[0].style.backgroundImage = "url('curitiba1.jpg')";
  document.getElementsByClassName("temalucas")[0].style.backgroundRepeat = "no-repeat";
  document.getElementsByClassName("temalucas")[0].style.backgroundPosition = "100% 100%";
  document.getElementsByClassName("temalucas")[0].style.backgroundSize = "cover";
  document.getElementsByClassName("temalucas")[0].style.backgroundAttachment = "fixed";
}


function carregar(){
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementsByClassName('imagem')
  var data = new Date()
  var hora = data.getHours()
  //var hora = '2'
  var min = data.getMinutes()
  var seg = data.getSeconds()
  
  msg.innerHTML = `Agora são ${hora}:${min}:${seg} horas.`
  if(hora >= 0 && hora <12){
      msg.innerHTML += 'Bom dia' 
      img.src = 'ecovilledia.jpg'
      document.body.style.background = '#e2cd9f'
      document.body.style.backgroundImage = "url('ecovilledia.jpg')"
      document.body.style.backgroundSize = 'cover'
      document.body.style.backgroundPosition = '100% 100%'
      document.body.style.backgroundAttachment = 'fixed'
      //document.body.style.backgroundRepeat = 'no-repeat'
  }else if (hora >= 12 && hora <=18) {
    msg.innerHTML += ' Boa tarde'
      //img.src = 'tanguatarde.jpg'
      //document.body.style.background = '#b9846f'
      document.body.style.backgroundImage = "url('tanguatarde.jpg')"
      document.body.style.backgroundSize = 'cover'
      document.body.style.backgroundPosition = '100% 100%'
      document.body.style.backgroundAttachment = 'fixed'
      document.body.style.backgroundRepeat = 'no-repeat'
      
  }else {
    msg.innerHTML += 'Bom noite'
      img.src = 'bariguinoite.jpg'
      document.body.style.background = '#515154'
      document.body.style.backgroundImage = "url('bariguinoite-728.jpg')"
      document.body.style.backgroundSize = 'cover'
      document.body.style.backgroundPosition = '100% 100%'
      document.body.style.backgroundAttachment = 'fixed'
      //document.body.style.backgroundRepeat = 'no-repeat'
  }
  var name = window.document.getElementById('AA')
  var namevalor = window.document.getElementById('name').value
  name.innerHTML += namevalor
}
function mudanome() {
  var name = window.document.getElementById('AA')
  var namevalor = window.document.getElementById('name')
  name.innerHTML = `Portifólio do  ${namevalor.value}`
}




/*document.body.setAttribute('data-theme', 't-ligth')

const button = document.querySelector('.themepraia')

const themes = {
  't-praia':'t-ligth',
  't-ligth': 't-praia',
}

if (button) {
  button.addEventListener('click', event ⇒ {
    event.preventFefault()
    const currentTheme = document.body.dataset.theme
  document.body.setAttribute('data-theme', themes[currentTheme] || 't-ligth')
  })
  
}*/