let pessoas = [
    { nome: 'Roberto', idade: 33},
    { nome: 'Ricardo', idade: 33},
    { nome: 'Raphael', idade: 27}
]

// let nomeDasPessoas = [] 
// for(let i = 0; pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)
// }
// console.log(nomeDasPessoas)


// usando o Map
let nomeDasPessoas = pessoas.map(function(pessoa){
    return pessoa.nome + " têm " + pessoa.idade + " anos de idade"
})

console.log(nomeDasPessoas)