import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password);
            if(isLogged) {
                navigate('/');
            } else {
                alert("Erro ao fazer login.");
            }
        } else {
            alert('Os campos não podem estar vazios. Preencha por favor!')
        }
    }

    return (
        <div>
            <h2>Página Fechada</h2>

            <input type="text" value={email} onChange={handleEmailInput} placeholder="Digite seu E-mail"/>
            <input type="password" value={password} onChange={handlePasswordInput} placeholder="Digite sua Senha"/>

            <button onClick={handleLogin}>Logar</button>
        </div>
    );
}