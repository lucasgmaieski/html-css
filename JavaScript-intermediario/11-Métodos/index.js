let usuario = { 
    nome: 'Lucas',
    excluir: function() {
        console.log('O usuaário, ' + this.nome + ' foi excluído!')
    }
}

usuario.excluir()