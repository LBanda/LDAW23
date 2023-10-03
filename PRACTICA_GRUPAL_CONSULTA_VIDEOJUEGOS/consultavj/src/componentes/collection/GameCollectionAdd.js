import React from "react";
import { useFetch } from "../../hooks/custom/useFetch";
import { useForm } from "../../hooks/custom/useForm";


export const GameCollectionAdd = ({ handleNewGame }) => {
    const [{ gameId }, handleInputChange, reset] = useForm({
        gameId: "",
    });

    const url = `https://api.rawg.io/api/games/${encodeURI(gameId)}?key=33b59237bfff4660a9981db50a711dce`;

    const { info } = useFetch(url);

    const handleAddGame = (e) => {
        if (gameId.trim().length === 0) {
            return;
        }

        const nuevoJuego = {
            id: new Date().getTime(),
            juego: info,
        };

        handleNewGame(nuevoJuego);

        reset();
    };

    return (
        <>
            <h4>Agrega juegos a tu colección</h4>
            <hr />
            <form onSubmit={handleAddGame}>
                <input
                    type="text"
                    name="gameId"
                    className="form-control"
                    placeholder="Ingresa el id del juego ..."
                    autoComplete="off"
                    value={gameId}
                    onChange={handleInputChange}
                />
                <br />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar juego
                </button>
            </form>
        </>
    );
};