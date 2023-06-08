import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'
function App() {
    const [count, setCount] = useState(0)

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                <Route path="/profile" element={<ProtectedLayout><h2>Olá você esta na página profile</h2></ProtectedLayout>}></Route>

                </Routes>

                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
