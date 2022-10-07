var cidade  // declaração
cidade = 'Ampére'  // atribuição

var cidade2 = 'Realeza'

//o hoisting move toda a declaração de uma variavel para o topo daquele escopo porem a atribuição fica onde foi atribuida

console.log(pais)
var pais = 'Brasil'
//aqui o resultado é undefined pq a declaração da variavel vai para o topo mas a atribuição não 
// isso só vale para variavel --var--


//para variavel --let--
// elas só podem ser lidas depois de totalmente inicializadas que só acontece quando elas são declaradas -- não tem içamento aqui