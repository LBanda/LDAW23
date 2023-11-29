import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//import { UserContext } from '../../hooks/custom/userContext';

export const LoginScreen = () => {
   // const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const [username, setUsername] = useState('Fulanito'); // Valor inicial para username
    const [password, setPassword] = useState('1234'); // Valor inicial para password

    const doLogin = () => {
        if (username === 'Fulanito' && password === '1234') {
            navigate("/videojuegos");
        } else {
            alert('Credenciales incorrectas. Inténtelo de nuevo.');
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form id="loginForm">
                <label htmlFor=" ">Usuario:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username} // Valor del input
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br /><br />

                <label htmlFor=" ">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password} // Valor del input
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br /><br />

                <button className="btn btn-primary" onClick={doLogin}>
                    Ingresar
                </button>
            </form>
        </>
    )
}