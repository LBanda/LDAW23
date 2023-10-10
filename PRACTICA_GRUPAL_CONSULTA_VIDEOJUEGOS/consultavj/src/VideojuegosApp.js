import React, { useState } from 'react';
import { AgregaGenero } from './componentes/AgregaGenero';
import { InfoVideojuegos } from './componentes/InfoVideojuegos';


export const VideojuegosApp = () => {

    const [generos, setGeneros] = useState(['action']);


    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Gamebook</h1>
                    <p className="lead">¡Bienvenido a la página donde podrás consultar información de videojuegos!</p>
                </div>
            </div>

            <AgregaGenero setGeneros={setGeneros} />

            <ol className="list-group list-group-numbered">
                {
                    generos.map(genero => {

                        return <InfoVideojuegos
                            key={genero}
                            genero={genero}
                        />
                    })
                }
            </ol>

        </>
    )
}