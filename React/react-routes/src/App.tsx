import { RouteList } from './RouteList';


function App() {

  return (
    <div className='bg-orange-600 text-3xl font-bold underline p-4'>
      <h1>Título do site</h1>
      <hr />
      <div className='py-4'>
        <RouteList />
      </div>
      <hr />
      <footer>
        Todos os direitos reservados
      </footer>
    </div>
  )
}

export default App
