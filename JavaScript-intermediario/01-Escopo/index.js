// a acessibilidade das variaveis let e const é limitada ao escopo em que elas são criadas 
//escopo de bloco é pra usar const e let onde eles só podem ser usados nesse escopo
//escopo de bloco de codigo autonomo
// {
//     const mensagem = 'óla'
//     console.log(mensagem)
// }
// um bloco de código não cria um escopo para a variavel declaradas com var maaaaas o bloco de uma Função sim vai criar um escopo para a variavel var

let numero = 123
function falar(){
    const mensagem = 'Olá Mundo!'
    console.log(mensagem)
    function falarOutraCoisa(){

    }
    console.log(numero)
    falarOutraCoisa()
    console.log(falarOutraCoisa)
}
falar()
//uma função dentro de outra função tbm vai ficar inacessivel fora dessa função 
let texto = 'essa veriavel só funciona se for chamada depois dessa linha em que esta sendo declarada, antes disso vai dar erro '

//uma variavel declarada fora de um escopo é uma variavel global e pode ser acessada em qualquer lugar nesse arquivo desde que esteja declada antes de ser unsada