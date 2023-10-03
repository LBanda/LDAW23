import React from "react";
import { GameCollectionItem } from "./GameCollectionItem";

export const GameCollection = ({ gamesState, handleDeleteGame }) => {
    return (
        <div className="d-flex flex-row flex-wrap">
            {gamesState.map((game, i) => (
                <GameCollectionItem
                    game={game}
                    index={i}
                    handleDeleteGame={handleDeleteGame}
                />
            ))}
        </div>
    );
};