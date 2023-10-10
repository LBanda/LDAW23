import React from 'react';
import { useFetch1 } from '../hooks/custom/useFetch1';

export const InfoVideojuegos = ({genero}) => {


    const url = 'https://api.rawg.io/api/games?key=33b59237bfff4660a9981db50a711dce&genres=' + genero;

    const { loading, info }  = useFetch1(url);
    console.log(info);
    



    return(
        <>
            <h3 className="card-title">{genero}</h3>
            <div className="row row-cols-4">
                {loading ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) 
                    : 
                    (
                        info.map( ({id, nombre, imagen, rating, metacritic}) => {
                            return <div key={id} className="card">
                                    <img src={imagen} className="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{nombre}</h5>
                                            <p  className="card-text">Rating: {rating} <br></br> Metacritic: {metacritic}</p>
                                        </div>
                                    </div>
                        }
                        )
                    )
                }
        </div>
        </>

        
        )
}