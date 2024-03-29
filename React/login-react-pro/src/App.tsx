import './App.css';
import { useContext } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signout();
        navigate('/');
    }

    return (
        <div className="App">
            <header>
                <h1>header do site</h1>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/private'>Página Privada</Link>
                    {auth.user && <button onClick={handleLogout}>Sair</button>}
                </nav>
            </header>
            <hr />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/private' element={<RequireAuth><Private /></RequireAuth>} />
            </Routes>
        </div>
    );
}

export default App;
