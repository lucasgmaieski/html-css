

let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado){
    return new Promise((resolve, reject) =>{ 
        if(typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo booleano é aceito"

        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        }else{
            const mensagemErro = 'é necessário colcoar a chaleira com a água e ligar o fogão senão teu cafézinho não vai ficar pronto nunca'
            reject(mensagemErro)
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
let chaleiraEstaNoFogao = 'teste'
let fogaoEstaLigado = false




console.log('fazendo café')
async function iniciarProcessoDeFazerCafe (){
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)
        if(xicaraLavada) console.log('Finalizado o ritual de tomar café, bora trabalhar')

        // throw "mensagem de errooooooo"
    }catch(error){
        //aqui vamos tratar os erros que o try mandar
        console.log(error)
    }finally {
        // aqui é onde termina o tratamento de erros independente se teve ou não erros
    }
}
// usa o await para esperar que todo o processo da função seja feito para só então retornar

// se o try pegar um erro ele vai dicercionar para o catch
// THROW é uma forma de forçar um erro ou colocar uma exceção 
iniciarProcessoDeFazerCafe()

