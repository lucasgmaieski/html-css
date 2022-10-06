
function guardaNome(){
 return window.prompt('Por favor informe seu nome:')
}

const nome = guardaNome()
if (nome === null || nome == ''){
    boasVindas()
} else {
    boasVindas(nome)
}


function boasVindas( nomes = 'Jovenzinho') {
    window.alert('Seja bem vindo(a), ' + nomes + '!')

}


// boasVindas(nome)

// window é o objeto 
// prompt é o método