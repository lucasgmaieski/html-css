

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

let passarCafe = () => console.log('passando café')

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log('fazendo café')