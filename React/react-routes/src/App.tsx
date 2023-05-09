import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutItem } from './pages/AboutItem';
import { NotFound } from './pages/NotFound';
import { RequireAuth } from './RequireAuth';

function App() {

  return (
    <div className='bg-orange-600 text-3xl font-bold underline p-4'>
      <h1>Título do site</h1>
      <hr />
      <div className='py-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<RequireAuth><About /></RequireAuth>} />
          <Route path="/sobre/:slug" element={<AboutItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes> 
      </div>
      <hr />
      <footer>
        Todos os direitos reservados
      </footer>
    </div>
  )
}

export default App
