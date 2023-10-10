import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../componentes/comunes/Navbar';
import { GameCollectionApp } from '../componentes/collection/GameCollectionApp';
import { VideojuegosApp } from '../VideojuegosApp';
export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route exact path="/videojuegos" element={<VideojuegosApp />} />
                    <Route exact path="/colleccion" element={<GameCollectionApp />} />
                    <Route
                        path="*"
                        element={<Navigate to="/videojuegos" replace />}
                    />
                </Routes>
            </div>
        </>
    )
}