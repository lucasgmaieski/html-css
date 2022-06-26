function calcularst() {
    let pesopanela1 = document.querySelector('input#pesopan1')
    let res = document.querySelector('p.res')
    let resd = document.querySelector('h2#resd')
    let dia = document.querySelector('input#opdias').value
    let opesop = Number(pesopanela1.value)
    let frangoliqui = (opesop - 1068)
    resd.innerHTML = dia

    if (dia == 'Segunda e Terça') {
        let fragototst = 620
        let segterman = (frangoliqui * 25) / fragototst      //25g de frango de manhã
        let segtermei = (frangoliqui * 60) / fragototst      //60g de frango de meio dia 
        let segternoi = (frangoliqui * 70) / fragototst      //70g de frango de noite
        res.innerHTML = `1250g de frango cru no prato
        <br>Seg manhã: ${segterman.toFixed(0)}<br>
        Seg <sup>1</sup>/<sub>2</sub>dia: ${segtermei.toFixed(0)}<br>
        Seg noite: ${segternoi.toFixed(0)}<br>
        Ter manhã: ${segterman.toFixed(0)}<br>
        Ter <sup>1</sup>/<sub>2</sub>dia: ${segtermei.toFixed(0)}<br>
        Ter noite: ${segternoi.toFixed(0)}<br>`
    } else if(dia == 'Quarta e Quinta') {
        let frangototqq = 370
        let quaquiman = (frangoliqui * 25) / frangototqq
        let quamei = (frangoliqui * 65) / frangototqq
        let quimei = (frangoliqui * 80) / frangototqq
        res.innerHTML = `910g de frango cru com o prato
        <br>Qua manhã: ${quaquiman.toFixed(0)}<br>
        Qua <sup>1</sup>/<sub>2</sub>dia: ${quamei.toFixed(0)}<br>
        Qui manhã: ${quaquiman.toFixed(0)}<br>
        Qui <sup>1</sup>/<sub>2</sub>dia: ${quimei.toFixed(0)}<br><br>
        Quarta macarrão: 600g de frango cru com o prato<br>`
    } else {
        frangoliquiqss = opesop -500
        resd.innerHTML = 'Quinta Sexta e Sábado'
        let frangototqss = 180
        let sexsabman = (frangoliquiqss * 25) / frangototqss
        let quinoi = (frangoliquiqss * 40) / frangototqss
        res.innerHTML = `655g de frango cru com o prato
        <br>Qui noite ${quinoi.toFixed(0)}
        <br>Sex manhã: ${sexsabman.toFixed(0)}<br>
        Sab manhã: ${sexsabman.toFixed(0)}<br>
        Sexta macarrão: 780g de frango cru com o prato<br>
        Sexta strogonoff: 950g de frango cru com o prato`
    }
    
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