// setTimeout e setinterval além de funções tbm são metodos do objeto window igual o alert e por isso rodam sem ser declarados

// setTimeout(function(){
//     // vai esperar 3 segundos para executar o código
//     // alert('Olá mundo')
//     console.log('console dentro do setTimeout')
// }, 3000)


// setInterval(() => {
//     //executa a função a cada 3 segundos
//     console.log('Executando a cada 3 segundos')
// }, 3000);

// setTimeout e setinterval são métodos ASSINCRONOS
// console.log('console depois do setTimeout')


//para parar o setTimeout ou setinterval 

const idDoIntervalo = setInterval(() => {
    console.log('Executando a cada 3 segundos')
}, 3000);

console.log(idDoIntervalo)

clearInterval(idDoIntervalo)
//com isso o setInterval nunca é executado

clearTimeout()

