import React from 'react';
import { GameListScreen } from '../games/GameListScreen';
export const SwitchScreen = () => {
    return (
        <>
            <h1>Juegos de Nintendo Switch</h1>
            <br />
            <GameListScreen plataforma="Nintendo Switch" />
        </>
    )
}