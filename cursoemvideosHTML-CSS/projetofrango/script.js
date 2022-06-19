function calcularst() {
    let pesopanela1 = document.querySelector('input#pesopan1')
    let res = document.querySelector('p.res')
    let dia = document.querySelector('input#opdias').value
    let opesop = Number(pesopanela1.value)
    let frangoliqui = (opesop - 1068)
    let fragototst = 620
    let resposta = 0
    let segterman = (frangoliqui * 25) / fragototst      //25g de frango de manhã
    let segtermei = (frangoliqui * 60) / fragototst      //60g de frango de meio dia 
    let segternoi = (frangoliqui * 70) / fragototst      //70g de frango de noite

    res.innerHTML = `Seg manhã: ${segterman}<br>
    Seg <sup>1</sup>/<sub>2</sub>dia: ${segtermei}<br>
    Seg noite: ${segternoi}<br>
    Ter manhã: ${segterman}<br>
    Ter <sup>1</sup>/<sub>2</sub>dia: ${segtermei}<br>
    Ter noite: ${segternoi}<br>
    ${dia}`
}


/*<script>
        function calcular() {
            let sobra = document.querySelector('input#vsobra')
            let res = document.querySelector('p.res')
            asobra = Number(sobra.value)
            let resposta = 0
            resposta = (((1400 - asobra) / 2.45) + 294)-206
            res.innerHTML = ''
            res.innerHTML += `<br>\u{1F449}${resposta.toFixed(0)} \u{1F448}`
            
        }
    </script>*/