'use strict'
// Modo estrito ->evita um escopo vazar para dentro de outro 
// console.log(this)
// console.log(window)

// this.name = 'Lucas'
// function saudar() {
//     console.log('this no contexto da função', this)
//     console.log('Olá ' + this.name)
// }

// saudar()

// let usuario = {
//     nome:'Lucas',
//     saudar: function() {
//         console.log('this no contexto do metodo ', this)
//         console.log('this.name no contexto do método ', this.nome)
//     }
// }

// usuario.saudar()


let comida = {
    nome:'Brócolis',
    temperatura: 0
}

// comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento) {
//     comidaParaCozinhar.temperatura = temperaturaDeCozimento;
// }
comida.cozinhar = function(temperaturaDeCozimento) {
    this.temperatura = temperaturaDeCozimento;
}
console.log(comida)
comida.cozinhar(100)
console.log(comida)