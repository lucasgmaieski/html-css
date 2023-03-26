import React from 'react';
import { Header } from './components/Header';
import { Photo } from './components/Photo';
import { Contador } from './components/Contador';
import { Nameinput } from './components/Nameinput';
import { Botao} from './components/Botao';
import { List } from './components/List';
import { Mostrar } from './components/Mostrar';
import { useState } from 'react';


// const App = () => {
//   // return React.createElement('div', null, 'Hello Word!');
//   return React.createElement('a', { href: 'https://b7web.com.br'}, 'Clique Aqui!');
// }
// function App() {
//   return (
//     <div> Hello Word!</div>
//   );
// }

// expressões no jsx
const App = () => {
  const [numero, setNumero] = useState(0);
  const [name, setName] = useState('Lucas');
  let textoDoBotao = 'Clicar no botão';

  const botaoEventAction = (text: string) => {
    alert("Frase do App: " + text);
  }

  const hadleButtonClick = () => {
    alert("O número foi somado a 10!");
    setNumero(numero + 10);
    setName(`Lucas é nota ${numero}`);
  }

  return (
    <div>
      <Header title="Este é um título de exemplo passado por props"/>
      <Header title="Este é um título secundario de exemplo passado por props"/>
      Hello Word!

      <Photo url="http://www.google.com.br/google.jpg" legend="Google"/>

      <button onClick={hadleButtonClick}>Clique aqui!</button>

      O número é: {numero} <br />
      O nome é: {name} <br /><br />
      
      <Contador /> <br />
      <Nameinput /> <br /><br />
      
      <Botao text={textoDoBotao} clickFn={botaoEventAction}/> <br />
      
      <h2>Lista de presença</h2>
      <List /> <br />

      <Mostrar />
    </div>
  );
}

export default App;