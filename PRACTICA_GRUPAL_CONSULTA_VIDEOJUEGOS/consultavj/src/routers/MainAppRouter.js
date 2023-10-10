import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { LoginScreen } from '../componentes/login/LoginScreen';
import { AppRouter } from './AppRouter';
export const MainAppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<LoginScreen />} />
                    <Route
                        path="*"
                        element={<AppRouter/>}
                    />
                </Routes>
            </div>
        </Router>
    )
}