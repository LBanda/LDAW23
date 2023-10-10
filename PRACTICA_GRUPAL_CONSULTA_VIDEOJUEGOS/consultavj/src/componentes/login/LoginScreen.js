import React from 'react';
import { useNavigate } from 'react-router-dom';
export const LoginScreen = () => {
    const navigate = useNavigate();
    const doLogin = () => {
        navigate("/videojuegos");
    }
    return (
        <>
            <h1>Bienvenid@</h1>
            <br />
            <button className="btn btn-primary"
                onClick={doLogin}>
                Ingresar
            </button>
        </>
    )
}