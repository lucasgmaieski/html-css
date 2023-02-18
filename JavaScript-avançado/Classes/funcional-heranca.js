const defaultUser = {
    name: '',
    email: '',
    level: 1
}

const user1 = {
    ...defaultUser,   // herda todas as propriedades de defaultUser
    name: 'Lucas',     // se ja existe um com o mesmo nome ele substitui se não ele cria 
    email:'suporte@lucas.com.br'
}

const adm1 = {
    ...defaultUser,
    name: 'Admin bolado',
    email: 'admin@adm.com.br',
    level: 2
}

console.log(adm1);