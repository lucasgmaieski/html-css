import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
    const [count, setCount] = useState(0)

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/tela" element={<ProtectedLayout><tela/></ProtectedLayout>}></Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
