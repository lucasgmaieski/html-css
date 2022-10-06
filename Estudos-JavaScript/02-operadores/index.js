let primeiroValor = 4
let segundoValor = "3"
let terceiroValor = 10
console.log(primeiroValor > segundoValor)


for(let i = 0; i<primeiroValor; i++ ) {
    console.log(i + Number(segundoValor))
    console.log(i + segundoValor)
}

while(primeiroValor < terceiroValor) {
    console.log('contando com ajuda do while'+ primeiroValor )
    primeiroValor++;
}


let nomeFilme = 'Vingadores'

switch(nomeFilme) {
    case 'Vingadores':
        console.log('É o filme dos Vingadores')
        break
    case 'Batman vs Superman':
        console.log('É o filme do Batman vc Superman')
        break
    default :
        console.log('É outro filme')
}


let avaliacao = 8 

switch(avaliacao){
    case 1:
    case 2:
        console.log('Filme ruim')
        break
    case 3:
    case 4:
        console.log('Filme mediano')
        break
    case 5:
        console.log('Filme exelente')
        break
    default:
        console.log('Inavaliavel')
        break
    
}