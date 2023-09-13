import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const InfoVideojuegos = ({ genero }) => {

    //Utilizamos useEffect para invocar la función getVideojuegos.
    useEffect(() => {
        getVideojuegos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Creamos el estado del componente con useState
    const [infoJuegos, setInfoJuegos] = useState([]);

    const getVideojuegos = async () => {
        //URL del api de RAWG que validamos en postman
        const url = 'https://api.rawg.io/api/games?key=33b59237bfff4660a9981db50a711dce&genres=' + encodeURI(genero);
        //Utilizamos Fetch API para invocar la url.
        const respuesta = await fetch(url);
        //Recuperamos el JSON de la respuesta, el cual contiene la información de los videojuegos.
        const { results } = await respuesta.json();
        //Obtenemos solamente la información que vamos a necesitar del json de la respuesta.
        const juegos = results.map(juego => {
            return {
                id: juego.id,
                nombre: juego.name,
                imagen: juego.background_image,
                rating: juego.rating,
                metacritic: juego.metacritic   
            }

        })
//Invocamos el metodo setInfoJuegos que obtivimos con la desestructuración del hook useState
setInfoJuegos(juegos);

    }

    return (

        infoJuegos.map(({ nombre, imagen, rating, metacritic }) => (
        <Card style={{ flex: 1 }}>
          <Card.Img width="50px" variant="top" src={imagen} />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
              Rating: {rating}
              <br />
              Metacritic: {metacritic}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    )
    )
}