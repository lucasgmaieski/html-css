

let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado){
    return new Promise((resolve, reject) =>{ 
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        }else{
            console.log('é necessário colcoar a chaleira com a água e ligar o fogão senão teu cafézinho não vai ficar pronto nunca')
            reject()
        }
    } )
}
let passarCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('passo 2 finalizado: Café foi passado')
        resolve(true)
    })
}
let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('passo 3 finalizado: Terminei de tomar o café')
        resolve(true)
    })
}
let lavarXicara = (cafetomado) => {
    return new Promise((resolve) => {
        console.log('passo 4 finalizado: Xícara foi lavada')
        resolve(true)
    })
}
let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true




console.log('fazendo café')
async function iniciarProcessoDeFazerCafe (){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if(xicaraLavada) console.log('Finalizado o ritual de tomar café, bora trabalhar')
}
// usa o await para esperar que todo o processo da função seja feito para só então retornar
iniciarProcessoDeFazerCafe()