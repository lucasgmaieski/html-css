// -----Slice = cortar(copia os elemetos)-----
// Array.slice(inicio,fim)
let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']
//extrai os elementos da posição 1 até a 3 mas não inclui o 3
// se colocar só 1 parametro ele vai pegar daquela posição até o final do array
let frutasExtraidas = frutas.slice(1,3)
console.log(frutasExtraidas)
console.log(frutas)

//-------Splice = costurar------
// priemiro parametro é o indice do elemento que quer começar a remover e o segundo parametro é quantos quer remover apartir dai
//cria um array novo com os elementos removidos
// let frutasExtraidasPermanente = frutas.splice(1, 2)
// console.log(frutasExtraidasPermanente)
// console.log(frutas)

//remover e substituir por outros
let removeEAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Pêra')
console.log(frutas)
console.log(removeEAdicionaFrutas)
