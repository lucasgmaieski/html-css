// 4 estados
// pendente  - estado inicial de toda promises
// realizada  -resolve    a gente que vai definir se foi realizada ou recusada
// recusada   -reject
// estabelecida  -é quando ela já foi realizada ou recusada

new Promise((resolve, reject) =>{ 

} )
// ela é um classe no js por isso começa com letra maiuscula
// e ela recebe uma função que vai ser executada assincronamente
//a função vai receber 2 parametros que tbm podem ser funções


let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado){
    return new Promise((resolve, reject) =>{ 
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver a água')
            resolve()
        }else{
            console.log('é necessário ligar o fogão e colcoar a chaleira no fogão para ferver a água')
            reject()
        }
    } )
}

let chaleiraEstaNoFogao = false
let fogaoEstaLigado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')