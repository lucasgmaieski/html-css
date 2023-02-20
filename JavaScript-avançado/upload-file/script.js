async function enviar() {
    let arquivo = document.getElementById('arquivo').files;
    console.log(arquivo[1]);

    let body = new FormData();
    body.append('title', 'Bla bla bla');
    body.append('arquivo', arquivo);


    let req = await fetch('https://meusite.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}