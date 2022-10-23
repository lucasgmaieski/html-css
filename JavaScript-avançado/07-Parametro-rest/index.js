// function(a, b, ...args) {
//     .....
// }


// function incentivarQuester(mensagem, nomeQester) {
//     console.log(`${mensagem} ${nomeQester}`)
// }

// incentivarQuester('Parabéns por ter chego ao módulo de JavaScript avançado,', 'João')

function incentivarQuester(mensagem, ...nomesQuesters) {
    console.log(nomesQuesters)
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`)) 
}

incentivarQuester('Parabéns por ter chego ao módulo de JavaScript avançado,', 'João', 'Pedro', 'Paulo', 'Lucas', 1, true)