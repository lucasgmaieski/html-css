// function somar(numero1, numero2){
//     return numero1 + numero2
// }

// let resultadoDaSoma = somar(12, 5)
// console.log(resultadoDaSoma)

// função anônima porque não tem nome
let resultadoDaSoma = function(numero1, numero2){
    return numero1 + numero2
}

console.log(resultadoDaSoma) // aqui ele mostra a função
console.log(resultadoDaSoma(12, 5))  // aqui ele mostra o resultado que a função retorna