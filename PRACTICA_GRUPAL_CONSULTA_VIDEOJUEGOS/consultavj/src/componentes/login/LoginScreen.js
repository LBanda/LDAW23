import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(''); // Initialize state for username
    const [contrasena, setPassword] = useState(''); // Initialize state for password

    const doLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, contrasena }),
            });

            if (response.ok) {
                // Successful login, navigate to the desired page
                navigate("/videojuegos");
            } else {
                // Unsuccessful login, show an alert
                alert('Credenciales incorrectas. Inténtelo de nuevo.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Handle error, show an alert, or redirect to an error page
        }
    };

    return (
        <>
            <h1>Login</h1>
            <form id="loginForm">
                <label htmlFor=" ">Usuario:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username} // Value from state
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br /><br />

                <label htmlFor=" ">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={contrasena} // Value from state
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br /><br />

                <button className="btn btn-primary" onClick={doLogin}>
                    Ingresar
                </button>
            </form>
        </>
    );
};