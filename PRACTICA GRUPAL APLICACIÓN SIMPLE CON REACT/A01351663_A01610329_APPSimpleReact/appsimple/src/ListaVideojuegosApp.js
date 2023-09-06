import React from "react";

const ListaVideojuegosApp = () => {
  const videojuegos = [
    {
      nombre: "The Legend of Zelda: Breath of the Wild",
      desarrollador: "Nintendo",
      fechaDeLanzamiento: "2017-03-03",
      imagen: "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
    },
    {
      nombre: "Elden Ring",
      desarrollador: "FromSoftware",
      fechaDeLanzamiento: "2022-02-25",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png",
    },
    {
      nombre: "God of War Ragnarök",
      desarrollador: "Santa Monica Studio",
      fechaDeLanzamiento: "2022-11-09",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
    },
  ];

  return (
    <div>
      <h1>Lista de videojuegos</h1>
      <ul>
        {videojuegos.map((videojuego) => (
          <li key={videojuego.nombre}>
            <img src={videojuego.imagen} alt={videojuego.nombre} />
            <h2>{videojuego.nombre}</h2>
            <p>{videojuego.desarrollador}</p>
            <p>{videojuego.fechaDeLanzamiento}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVideojuegosApp;
