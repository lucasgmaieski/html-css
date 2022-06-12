let num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let vetor = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}
function inLista(n, li) {
    if (li.indexOf(Number(n)) != -1) {
        return true        
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) 
        res.innerHTML = ''     //quano eu add um numero eu limpo a resposta la embaixo
    } else (
        window.alert('Valor inválido ou já encontrado na lista.')
    )
    num.value = ''      //limpando a caixa de texto para adicionar outro
    num.focus()         // coloca o foco no elemento
    }
function maior(m, vet) {
    //vet.sort()
    vet.sort((a, b) => a - b)
    return vet[m-1]
}
function menor(m, vet) {
    //vet.sort()
    vet.sort((a, b) => a - b)
    return vet[0]
}
function media(tot, vet) {
    let soma = 0
    for(let pos in vet){
        soma += vet[pos]
    }
    return soma/tot
}
function soma(vet) {
    let soma = 0
    for(let pos in vet){
        soma += vet[pos]
    }
    return soma
}
    function finalizar() {
        if (vetor.length == 0) {
            window.alert('Adicione algum valor primeiro')
        } else {
            let tot = vetor.length
            /*let maior = vetor[0]
            let menor = vetor[0]
            let soma = 0 
            let media = 0 
            for(let pos in vetor) {
                soma += vetor[pos]
                if (vetor[pos] > maior) {
                    maior = vetor[pos]
                }
                if (vetor[pos] < menor) {
                    menor = vetor[pos]
                }
            }
            media = soma / tot*/
            res.innerHTML = ''
            res.innerHTML = `Ao todo, temos ${tot} números cadastrados.<br>
            O maior valor informado foi ${maior(tot, vetor)}.<br></br>
            O menor valor informado foi ${menor(tot, vetor)}.<br>
            Somando todos os valores, temos ${soma(vetor)}.<br>
            A média dos valores digitados é ${(media(tot, vetor)).toFixed(0)}.`
            }
    }
    function zerar() {
        lista.innerHTML = ''
        res.innerHTML = ''
        vetor = []
    }
    function handle(e) {
        if (e.keyCode == 13) {
            onclick = adicionar()
        }
    }
            /*
    }

    /*var n = Number(num.value)
    if (num.value.length == 0) {
        window.alert('[ERRO] Digite um valor entre 1 e 100')
    }else {
        if (vetor.length == 0){
            vetor.push(n)
            //tab.innerHTML = ""
            let item = document.createElement('option')
            item.text += `Valor ${n} adicionado.`
            lista.appendChild(item)           //adicionando o elemento option 
            //window.alert(vetor)

        }else {
            for (let c = 0; c <= vetor.value.length; c++) {
                if (n == vetor(c)){
                    window.alert('Valor já adicionado!')
                    
                }
            }
            vetor.push(n)
            //tab.innerHTML = ""
            let item = document.createElement('option')
            item.text += `Valor ${n} adicionado.`
            lista.appendChild(item)           //adicionando o elemento option 
        }
    }
*/