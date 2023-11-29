
import { UserContext } from '../hooks/custom/userContext';
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { LoginScreen } from '../componentes/login/LoginScreen';
import { AppRouter } from './AppRouter';
export const MainAppRouter = () => {
    const [user, setUser] = useState({});
    return (
        <Router>
            <UserContext.Provider value={
            {
            user,
            setUser
            }
            }>
            </UserContext.Provider>
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