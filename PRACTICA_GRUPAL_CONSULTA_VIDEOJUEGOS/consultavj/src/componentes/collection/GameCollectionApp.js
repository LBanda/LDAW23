import React, { useEffect, useReducer} from "react";
import { GameCollection } from "./GameCollection";
import { GameCollectionAdd } from "./GameCollectionAdd";
import { GameCollectionReducer } from "./GameCollectionReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("games")) || [];
};

export const GameCollectionApp = () => {
    const [gamesState, dispatch] = useReducer(GameCollectionReducer, [], init);

    useEffect(() => {
        localStorage.setItem("games", JSON.stringify(gamesState));
    }, [gamesState]);

    const handleNewGame = (nuevoJuego) => {
        const action = {
            type: "add",
            payload: nuevoJuego,
        };
        dispatch(action);
    };

    const handleDeleteGame = (gameId) => {
        console.log(gameId);
        const action = {
            type: "delete",
            payload: gameId,
        };
        dispatch(action);
    };

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <br />
                    <h1 className="display-4">Colección de Juegos</h1>
                    <h2>
                        Número de juegos: {gamesState.length}
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-7">
                    <GameCollection
                        gamesState={gamesState}
                        handleDeleteGame={handleDeleteGame}
                    />
                </div>
                <div className="col-5">
                    <GameCollectionAdd handleNewGame={handleNewGame} />
                </div>
            </div>
        </>
    );
};