// let selectDeEstado = document.querySelector("select[name='estado']");

// // addEventListener (evento ou ação , função pra ser executada)
// selectDeEstado.addEventListener('change', function () {
//     alert('Mudou o select')
// })
//console.log(selectDeEstado)
//simplificando
document.querySelector("select[name='estado']")
        .addEventListener('change', function (event) {
         console.log(event.target.value)
        })

