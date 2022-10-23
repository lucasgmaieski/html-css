let pessoa = { nome: 'Roberto', sobrenome: 'Dias', idade:33 }
// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome)
// console.log(idade)

//Objetos
// o COLCHETES antes do = faz a desestruturação do objeto e dentro coloca a propriedade junto com a variavel para colocar a propriedade
// let { nomeDaPropriedade1: variavel1, nomeDaPropriedade2: variavel2} = objeto
// se o nome da variavel for o mesmo da propridade pode simplificar
//let { nome, idade } = pessoa
let { nome: nome, idade: idade } = pessoa

console.log(nome)
console.log(idade)



// desestruturar array
const numeros = [1, 2, 3];
// no array a desestruturação é com chaves
const [um, dois, tres] = numeros

console.log(um)
console.log(dois)