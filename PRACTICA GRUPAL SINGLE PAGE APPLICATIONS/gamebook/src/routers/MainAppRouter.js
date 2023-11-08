import React, { useState } from 'react';
import { UserContext } from '../hooks/userContext';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { LoginScreen } from '../componentes/login/LoginScreen';
import { GamesRouter } from './GamesRouter';
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
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route
                        path="*"
                        element={<GamesRouter />}
                    />
                </Routes>
            </div>
        </Router>
        
    )
}