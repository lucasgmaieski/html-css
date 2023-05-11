import { RouteList } from "./RouteList"


function App() {

  return (
    <div>
      <h1>Galeria de Fotos</h1>

      Mostrar lista com os albuns de fotos aqui (url= localhost:port/albums/)
      quando clicar em um album deve ir para a página desse album 
      na pagina interna de album deve ser um botão para voltar (aqui a url deve ser localhost:port/album/1)
      e deve exibir o título d album e um grid com as fotos desse album
      clicando em uma foto vai pra pagina daquela foto e exibe ela em tamanho grande com sua legenda(url= localhost:port/photo/103 )
      <div>
      <RouteList />
      </div>
      <footer>
        Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App

//https://jsonplaceholder.typicode.com/albums   
//https://jsonplaceholder.typicode.com/albuns/1
//https://jsonplaceholder.typicode.com/albuns/1/photos
//https://jsonplaceholder.typicode.com/photos/1

//configurar baseurl no axios
//utilizar rotas
//utilizar componentes com rotas em forma de objetos