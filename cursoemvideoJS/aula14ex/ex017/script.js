function gerar() {
    var num = document.getElementById('numero')
    var tab = document.querySelector('select#seltab')
    
    if (num.value.length == 0) {
        window.alert("[ERRO] Digite um número!")
    }else {
        var n = Number(num.value)
        tab.innerHTML = ""
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')     //criando o elemento option dentro do select(lista)
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)           //adicionando o elemento option 
            
        }
        
    }
}