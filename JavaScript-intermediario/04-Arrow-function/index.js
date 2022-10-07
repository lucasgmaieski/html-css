let resultadoDaSoma = (numero1, numero2) =>{
    return numero1 + numero2
}

console.log(resultadoDaSoma) 
console.log(resultadoDaSoma(12, 5))


const incentivarQuester = nomeQuester => {
    //aqui foi tirado os parenteses para simplificar pq tem 1 parâmetro só
    console.log('Parabéns ' + nomeQuester + ', Você chegou ao módulo de JS intermediário')
}
incentivarQuester('Lucas')

// Quando a função tem só uma linha da pra simplificar mais ainda tirando as chaves e o return

let resultadoDaSubracao = (numero1, numero2) => numero1 - numero2
console.log(resultadoDaSubracao(12, 5))
// isso é a forma simplificada da primeira função lá em cima