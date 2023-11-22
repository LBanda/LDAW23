use consultaVJ
db.createCollection("usuarios")
db.usuarios.updateOne({}, {
    $set: {
      nombreCompleto: "",
      avatar: "",
      username: "",
      contrasena: "",
      fechaRegistro: "",
      correoElectronico: ""
    }
  });

db.usuarios.insertOne({"nombreCompleto": "Juan Pérez",
"avatar": "https://static.wikia.nocookie.net/batman/images/e/e6/Site-logo.png/revision/latest?cb=20230601181237",
"username": "juanperez",
"contrasena": "contrasena123",
"fechaRegistro": new Date(),
"correoElectronico": "juanperez@example.com"})

db.createCollection("videojuegos")

db.videojuegos.updateOne({}, {
    $set: {
        username: "",
        idJuegoRAWG: "",
        nombreJuego: "",
        plataforma: "",
        comentarios: ""
    }
  });

db.videojuegos.insertOne({
    username: "juanperez",
    idJuegoRAWG: "123456789",
    nombreJuego: "The Legend of Zelda: Breath of the Wild",
    plataforma: "Nintendo Switch",
    comentarios: "Este juego es increíble, la historia es muy buena y el mundo es enorme. Me encanta poder explorarlo y descubrir cosas nuevas"
    })

db.createCollection("log")

db.log.updateOne({}, {
    $set: {
        username: "",
        fechaEvento: "",
        evento: ""
    }
  });

db.log.insertOne({
    username: "juanperez",
    fechaEvento: new Date(),
    evento: "Se registró en el portal"
  })


// Crear 4 usuarios

db.usuarios.insertOne({
    nombreCompleto: "Juan Pérez",
    avatar: "https://xombitmusic.com/files/2013/07/oie_10192942g3rh1cAW-640x480.jpg",
    username: "juanperez",
    contrasena: "contrasena123",
    fechaRegistro: new Date(),
    correoElectronico: "juanperez@example.com"
  });
  
  db.usuarios.insertOne({
    nombreCompleto: "María López",
    avatar: "https://media.revistagq.com/photos/645dde361c98f4b147443172/16:9/w_2560%2Cc_limit/100%2520mejores%2520videojuegos%2520gq.png",
    username: "marialopez",
    contrasena: "contrasena1234",
    fechaRegistro: new Date(),
    correoElectronico: "marialopez@example.com"
  });
  
  db.usuarios.insertOne({
    nombreCompleto: "Pedro García",
    avatar: "https://media.primicias.ec/2023/04/14134320/minecraft-videojuegos.jpg",
    username: "pedrogarcia",
    contrasena: "contrasena1235",
    fechaRegistro: new Date(),
    correoElectronico: "pedrogarcia@example.com"
  });
  
  db.usuarios.insertOne({
    nombreCompleto: "Sofía Hernández",
    avatar: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/02/30-mejores-heroes-ultimos-30-anos-2243371.jpg?tf=3840x",
    username: "sofiahernandez",
    contrasena: "contrasena1236",
    fechaRegistro: new Date(),
    correoElectronico: "sofiahernandez@example.com"
  });



// Agregar videojuegos a la colección de Juan Pérez

db.videojuegos.insertOne({
    username: "juanperez",
    idJuegoRAWG: "123456789",
    nombreJuego: "The Legend of Zelda: Breath of the Wild",
    plataforma: "Nintendo Switch",
    comentarios: "Este juego es increíble, la historia es muy buena y el mundo es enorme. Me encanta poder explorarlo y descubrir cosas nuevas"
    });
    
    db.videojuegos.insertOne({
    username: "juanperez",
    idJuegoRAWG: "234567890",
    nombreJuego: "Red Dead Redemption 2",
    plataforma: "PlayStation 4",
    comentarios: "Este juego es una obra maestra, la historia es muy emotiva y el mundo es muy detallado. Me encanta poder perderme en él"
    });
    
    db.videojuegos.insertOne({
    username: "juanperez",
    idJuegoRAWG: "345678901",
    nombreJuego: "Elden Ring",
    plataforma: "PlayStation 5",
    comentarios: "Este juego es desafiante pero muy satisfactorio, la historia es muy compleja y el mundo es muy vasto. Me encanta explorarlo y descubrir todos sus secretos"
    });

    db.videojuegos.insertOne({
        username: "juanperez",
        idJuegoRAWG: "456789013",
        nombreJuego: "Super Mario Odyssey",
        plataforma: "Nintendo Switch",
        comentarios: "Este juego es muy divertido y colorido, la historia es muy simple y el mundo es muy emocionante. Me encanta poder explorarlo y descubrir nuevos secretos"
        });
        
        db.videojuegos.insertOne({
        username: "juanperez",
        idJuegoRAWG: "567890124",
        nombreJuego: "Cuphead",
        plataforma: "Xbox One",
        comentarios: "Este juego es muy desafiante pero muy satisfactorio, la historia es muy original y el mundo es muy hermoso. Me encanta su estilo artístico único"
        });
        
        db.videojuegos.insertOne({
        username: "juanperez",
        idJuegoRAWG: "678901235",
        nombreJuego: "Splatoon 2",
        plataforma: "Nintendo Switch",
        comentarios: "Este juego es muy divertido y competitivo, la historia es muy simple y el mundo es muy emocionante. Me encanta poder jugar en línea con mis amigos"
        });
    
    // Agregar videojuegos a la colección de María López
    
    db.videojuegos.insertOne({
    username: "marialopez",
    idJuegoRAWG: "456789012",
    nombreJuego: "Horizon Forbidden West",
    plataforma: "PlayStation 5",
    comentarios: "Este juego es muy bonito y divertido, la historia es muy interesante y el mundo es muy emocionante. Me encanta poder explorarlo y descubrir nuevas criaturas"
    });
    
    db.videojuegos.insertOne({
    username: "marialopez",
    idJuegoRAWG: "567890123",
    nombreJuego: "God of War Ragnarök",
    plataforma: "PlayStation 5",
    comentarios: "Este juego es muy épico y emocionante, la historia es muy intensa y el mundo es muy hermoso. Me encanta poder luchar contra los dioses nórdicos"
    });
    
    db.videojuegos.insertOne({
    username: "marialopez",
    idJuegoRAWG: "678901234",
    nombreJuego: "Starfield",
    plataforma: "Xbox Series X/S",
    comentarios: "Este juego es muy ambicioso y prometedor, la historia es muy original y el mundo es muy vasto. Me encanta poder explorarlo y descubrir todos sus secretos"
    });

    db.videojuegos.insertOne({
        username: "marialopez",
        idJuegoRAWG: "789012345",
        nombreJuego: "Grand Theft Auto V",
        plataforma: "PlayStation 5",
        comentarios: "Este juego es un clásico atemporal, la historia es muy divertida y el mundo es muy abierto. Me encanta poder explorarlo y hacer lo que quiera"
        });
        
        db.videojuegos.insertOne({
        username: "marialopez",
        idJuegoRAWG: "890123456",
        nombreJuego: "Forza Horizon 5",
        plataforma: "Xbox Series X/S",
        comentarios: "Este juego es muy bonito y divertido, la historia es muy simple y el mundo es muy emocionante. Me encanta poder explorarlo y descubrir nuevos coches"
        });

// Agregar 5 videojuegos a la colección de Pedro García

db.videojuegos.insertOne({
    username: "pedrogarcia",
    idJuegoRAWG: "789012345",
    nombreJuego: "Grand Theft Auto V",
    plataforma: "PlayStation 5",
    comentarios: "Este juego es un clásico atemporal, la historia es muy divertida y el mundo es muy abierto. Me encanta poder explorarlo y hacer lo que quiera"
    });
    
    db.videojuegos.insertOne({
    username: "pedrogarcia",
    idJuegoRAWG: "890123456",
    nombreJuego: "Forza Horizon 5",
    plataforma: "Xbox Series X/S",
    comentarios: "Este juego es muy bonito y divertido, la historia es muy simple y el mundo es muy emocionante. Me encanta poder explorarlo y descubrir nuevos coches"
    });

    db.videojuegos.insertOne({
        username: "pedrogarcia",
        idJuegoRAWG: "901234567",
        nombreJuego: "The Witcher 3: Wild Hunt",
        plataforma: "PlayStation 4",
        comentarios: "Este juego es una obra maestra, la historia es muy épica y el mundo es muy vasto. Me encanta poder explorarlo y descubrir todos sus secretos"
        });

        db.videojuegos.insertOne({
            username: "pedrogarcia",
            idJuegoRAWG: "012345678",
            nombreJuego: "Cyberpunk 2077",
            plataforma: "PlayStation 5",
            comentarios: "Este juego es muy ambicioso y prometedor, la historia es muy original y el mundo es muy vasto. Me encanta poder explorarlo y descubrir todos sus secretos"
            });

db.videojuegos.insertOne({
    username: "pedrogarcia",
    idJuegoRAWG: "123456789",
    nombreJuego: "God of War",
    plataforma: "PlayStation 4",
    comentarios: "Este juego es muy épico y emocionante, la historia es muy intensa y el mundo es muy hermoso. Me encanta poder luchar contra los dioses nórdicos"
    });

// Agregar 5 videojuegos a la colección de Sofia Hernandez

db.videojuegos.insertOne({
    username: "sofiahernandez",
    idJuegoRAWG: "987654321",
    nombreJuego: "The Legend of Zelda: Breath of the Wild",
    plataforma: "Nintendo Switch",
    comentarios: "Este juego es una obra maestra. La exploración, los gráficos y la música son simplemente impresionantes. Cada rincón del mundo esconde secretos emocionantes."
});

db.videojuegos.insertOne({
    username: "sofiahernandez",
    idJuegoRAWG: "456789012",
    nombreJuego: "Red Dead Redemption 2",
    plataforma: "PlayStation 4",
    comentarios: "La inmersión en este mundo del oeste es increíble. La historia es absorbente, y los detalles en la jugabilidad hacen que cada momento sea memorable."
});

db.videojuegos.insertOne({
    username: "sofiahernandez",
    idJuegoRAWG: "789012345",
    nombreJuego: "Cyberpunk 2077",
    plataforma: "PC",
    comentarios: "A pesar de los problemas iniciales, disfruté mucho explorando Night City. La historia y la cantidad de opciones disponibles hacen que valga la pena jugarlo."
});

db.videojuegos.insertOne({
    username: "sofiahernandez",
    idJuegoRAWG: "234567890",
    nombreJuego: "Super Mario Odyssey",
    plataforma: "Nintendo Switch",
    comentarios: "Este juego es puro placer. Los mundos son coloridos y creativos, y la mecánica de captura de sombreros agrega un giro único a la jugabilidad de Mario."
});

db.videojuegos.insertOne({
    username: "sofiahernandez",
    idJuegoRAWG: "567890123",
    nombreJuego: "Assassin's Creed Valhalla",
    plataforma: "Xbox Series X",
    comentarios: "Explorar la época vikinga en este juego es fascinante. Las misiones secundarias son tan atractivas como la historia principal, y la ambientación es impresionante."
});

// El log debe tener por lo menos 10 eventos registrados.

db.log.insertOne({
    username: "juanperez",
    fechaEvento: new Date(),
    evento: "Se registró en el portal"
});

db.log.insertOne({
    username: "marialopez",
    fechaEvento: new Date(),
    evento: "Ingresó por primera vez al sistema"
});

db.log.insertOne({
    username: "pedrogarcia",
    fechaEvento: new Date(),
    evento: "Completó el tutorial del juego principal"
});

db.log.insertOne({
    username: "sofiahernandez",
    fechaEvento: new Date(),
    evento: "Añadió un nuevo juego a su colección"
});

db.log.insertOne({
    username: "juanperez",
    fechaEvento: new Date(),
    evento: "Actualizó su perfil con una nueva imagen"
});

db.log.insertOne({
    username: "marialopez",
    fechaEvento: new Date(),
    evento: "Realizó una compra en la tienda en línea"
});

db.log.insertOne({
    username: "pedrogarcia",
    fechaEvento: new Date(),
    evento: "Alcanzó el nivel 10 en el juego"
});

db.log.insertOne({
    username: "sofiahernandez",
    fechaEvento: new Date(),
    evento: "Compartió un logro en las redes sociales"
});

db.log.insertOne({
    username: "juanperez",
    fechaEvento: new Date(),
    evento: "Participó en un torneo virtual"
});

db.log.insertOne({
    username: "marialopez",
    fechaEvento: new Date(),
    evento: "Recibió un mensaje privado de un amigo"
});

// Obtener toda la información de un usuario en base a su correo electrónico
db.usuarios.findOne({ correoElectronico: "juanperez@example.com" });

//Obtener toda la información de la colección de videojuegos de un usuario en específico:

db.videojuegos.find({ username: "juanperez" });

//Obtener todos los registros de la colección de videojuegos de un usuario en específico, y que correspondan a palabras de búsqueda utilizando el nombre del videojuego:

db.videojuegos.find({
    username: "juanperez",
    nombreJuego: { $regex: "Zelda", $options: "i" } // Busca juegos que contengan "Zelda" (insensible a mayúsculas/minúsculas)
  });

 // Obtener todos los registros de la colección de videojuegos de un usuario en específico y de una consola en específico:

 db.videojuegos.find({ username: "juanperez", plataforma: "Nintendo Switch" });

 //Obtener todos los eventos del log que correspondan a un usuario en específico:

 db.log.find({ username: "juanperez" });

 //Obtener todos los eventos del log que correspondan a un rango de fechas en específico:

 var fechaInicio = new Date("2023-01-01");
var fechaFin = new Date("2023-12-31");

db.log.find({
  fechaEvento: { $gte: fechaInicio, $lte: fechaFin },
});

// Obtener todos los eventos del log que correspondan a un usuario en específico y que el evento contenga las palabras de búsqueda indicadas:

db.log.find({
    username: "juanperez",
    evento: { $regex: "compra", $options: "i" } // Busca eventos que contengan "compra" (insensible a mayúsculas/minúsculas)
  });
  
