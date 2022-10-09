// console.log(document)

let p = document.getElementById('paragrafo1')
console.log(p)


let inputPorClasse = document.getElementsByClassName('tag-de-input')
console.log(inputPorClasse)


let inputPorTag = document.getElementsByTagName('input')
console.log(inputPorTag)



//quero consultar qualquer elemento que seja da tag input e que tenha esse atributo entre colchetes
let inputPorName = document.querySelectorAll("input[name='email']")
console.log(inputPorName)