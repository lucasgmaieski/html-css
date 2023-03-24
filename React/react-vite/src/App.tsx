import React from 'react';
import { Header } from './components/Header';

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

  return (
    <div>
      <Header title="Este é um título de exemplo passado por props"/>
      <Header title="Este é um título secundario de exemplo passado por props"/>
      Hello Word!
    </div>
  );
}

export default App;