import { useContext } from "react";
import { Context } from "./contexts/Context";
import { MainRoutes } from "./routes/MainRoutes"



function App() {
  const {state, dispatch, user} = useContext(Context);
  const changeTheme = () => {
    if(state.status === 'dark') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'light'
        }
      });
    } else if(state.status === 'light') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark'
        }
      });
    }
    
  }
  return (
    <div style={{backgroundColor: state.status === 'dark' ? '#000' : '#fff', color: state.status === 'dark' ? '#fff' : '#000', width: '98.6vw' }}>
      <h1>Galeria de Fotos do {user} (tema: {state.status}) </h1>
      <button onClick={changeTheme}>{state.status === 'dark'? 'Light' : 'Dark'}</button>
      <hr />
      <MainRoutes />
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