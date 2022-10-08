//Objeto tem caracteristicas
// {  chave: valor, chave2: valor}
let tenis = { 
    cor: 'branco', 
    tamanho: 42,
    emEstoque: true
}

console.log(tenis)
//para acessar as propriedades é só colocar um ponto e o nome da propriedade ou
// console.log(tenis['emEstoque])
console.log(tenis.tamanho)
// da para adicionar novas propriedades ao objeto depois de ter criado-o
tenis.valor = 200
console.log(tenis)