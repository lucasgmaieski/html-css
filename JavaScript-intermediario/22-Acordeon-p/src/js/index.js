const itensPerguntasERespostas = document.querySelectorAll(".item");

itensPerguntasERespostas.forEach(function(item, indice,){
    item.addEventListener("click", function () {
        const itemAtivoAtual = document.querySelector(".ativo");
        console.log(itensPerguntasERespostas)
        console.log(item)
        console.log(`Clickei no item ${indice + 1}` )
        if(itemAtivoAtual === item){
            itemAtivoAtual.classList.remove("ativo");
            console.log("ele nunca vem pra ca")
            return;
        }
        else if (itemAtivoAtual) {
            itemAtivoAtual.classList.remove("ativo");
        }
        item.classList.add("ativo");
    })
})