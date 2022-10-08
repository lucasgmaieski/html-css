// let filmes = ['Vingadores', 'Mulher Maravilha']
// let avaliacoes = [1, 4.6, 5]
// let descricaoFilme = ['Vingadores', 4.5, true]

// console.log(filmes)
// console.log(descricaoFilme)


// ARRAYS MULTIDIMENCIONAIS
let filmes = [
                ['Vingadores', 4.5, true], 
                ['Mulher Maravilha', 4.6, true, ['Gal Gadot', 25]]
             ]
console.log(filmes)

console.table(filmes)

// acessando um array dentro do array
console.log(filmes[0][0])

console.log(filmes[1][3][0])