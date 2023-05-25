import { useContext } from "react";
import { Context, ContextProvider } from "./contexts/Context";
import { MainRoutes } from "./routes/MainRoutes"



function App() {
  const {state, dispatch, user} = useContext(Context)
  return (
    <>
      <h1>Galeria de Fotos do {user} (tema: {state.status}) </h1>
      <button>{state.status === 'dark'? 'Light' : 'Dark'}</button>
      <hr />
      <MainRoutes />
      <footer>
        Todos os direitos reservados.
      </footer>
    </>
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