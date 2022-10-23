const pessoas = ['Lucas', 'Luan', 'Neymar']
console.log(...pessoas)

// CONCATENAR dois ARRAYS antigamente tinha que usar  concat

let pessoas1 = ['Lucas', 'Luan', 'Neymar']
let pessoas2 = ['Luana', 'Luiza', 'Nauana']

// pessoas1 = pessoas1.concat(pessoas2)

pessoas1 = [...pessoas1, ...pessoas2]
console.log(pessoas1)

// CLONAR OBJETOS
const pessoaLoira = { nome: 'Tifani', idade: 33}
const pessoaMorena = { nome: 'Renata', idade: 26}

const objetoClonado = { ...pessoaLoira}
console.log(objetoClonado)
console.log(pessoaLoira)

// concatenar objetos
let concatenarObjetos = { pessoaLoira, pessoaMorena}
console.log(concatenarObjetos)
