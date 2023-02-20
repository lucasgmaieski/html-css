// https://jsonplaceholder.typicode.com/posts 

// Promise = Promessa

function clicou() {
    // Faça um requisição para esse url e então faça 
    // fetch sempre vai ter uma promessa. Quando tiver a promessa então ...
    // Tudo que tem uma promisse é assincona, vai ser executada, mandar um callback pra ela e depois só segue a execução
    //o padrão do fetch é o método GET
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
        // console.log(response.body)
    })
    .then((data) => {
        alert(`Título do primeiro post: ${data[20].title}`);
    })
    .catch((error) => {
        // caso deu algum problema esse callback é chamado
        console.log("Deu problema");
        console.log(error);
    })
    .finally(() => {
        // depois que der tudo certo ou der um erro executa essa callback
        alert("OPA, DEU TUDO CERTO!");
    })

    alert("clicou!")

}
function inserir() {
    fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        }
    )
    .then((response) => {
        return response.json(); //converte a resposta em um objeto 
    })
    .then((json) => {
        console.log(json);
    });
}


document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);

