// let frutas = ['banana', 'maçã', 'laranja', 'pêra', 'melancia']

// for(let i = 0; i < frutas.length; i++){
//     console.log('Fruta: ' + frutas[i])
// }


// --------forEach----------
let frutas = ['banana', 'maçã', 'laranja', 'pêra', 'melancia']
frutas.forEach(function(item, indice, array){
    console.log('Frutas: ' + frutas[indice])
    // console.log('Frutas: ' + item)
})

frutas.push('manga')         //adiciona elementos no final do array
frutas.pop()                 //remove o ultimo elemento do array
frutas.shift()               //remove o primeiro elemento do array
frutas.unshift()             //adiciona elemento no começo do array  
frutas.indexOf('laranja')    //retorna a posição do elemento no array