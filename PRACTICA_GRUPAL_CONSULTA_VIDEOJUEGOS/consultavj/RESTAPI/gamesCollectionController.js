'use strict';

const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = 'consultaVJ';

exports.obtener_info_usuario = async function (req, res) {

	//Nos conectamos a la BD
	const database = client.db(dbName);
	// Referencia a la coleccion
	const usuarios = database.collection("usuarios");
	// Recuperamos el valor del parametro
	var correoUsuario = req.params.correoElectronico;
	//Declaramos los filtros
	const query = { correo: correoUsuario};
	//Hacemos la consulta
	const usuario = await usuarios.findOne(query);
	console.log("Consulta ejecutada...");
	res.end(JSON.stringify(usuario));

};

exports.autenticar_usuario = async function (req, res) {

	//Nos conectamos a la BD
	const database = client.db(dbName);
	// Referencia a la coleccion
	const usuarios = database.collection("usuarios");
	 
	const usernameUsuario = req.body.username;
	const correoUsuario = req.body.correoElectronico;
	const contraUsuario = req.body.contrasena;

	if (!usernameUsuario || !correoUsuario || !contraUsuario) {
		res.status(400).send('Por favor, proporcione nombre de usuario, correo electrónico y contraseña.');
		return;
	}

	const usuario = await usuarios.findOne({ username: usernameUsuario });

	if (!usuario) {
		res.status(404).send('Usuario no encontrado.');
		return;
	}

	if (usuario.correoElectronico !== correoUsuario || usuario.contrasena !== contraUsuario) {
		res.status(400).send('Correo electrónico o contraseña incorrectos.');
		return;
	}else{
		console.log("Consulta ejecutada...");
		res.end(JSON.stringify(usuario));
	}

};

exports.busquedaVid_usuario = async function (req, res) {

	//Nos conectamos a la BD
	const database = client.db(dbName);
	// Referencia a la coleccion
	const videojuegos = database.collection("videojuegos");
	// Recuperamos el valor del parametro
	var nombreUsuario = req.params.username;
	//Declaramos los filtros
	const query = { username: nombreUsuario};
	//Hacemos la consulta
	const videojuego = await videojuegos.find(query).toArray();
	

	console.log("Consulta ejecutada...");

	res.end(JSON.stringify(videojuego));


};

exports.busquedaVid_usuario_palabra = async function (req, res) {

	//Nos conectamos a la BD
	const database = client.db(dbName);
	// Referencia a la coleccion
	const videojuegos = database.collection("videojuegos");
	// Recuperamos el valor del parametro
	const nombreUsuario = req.params.username;

	const palabraBusqueda = req.params.busqueda;
	
	//Declaramos los filtros
	const query = {
		$and: [
		  { username: nombreUsuario },
		  {
			$or: [
			  { nombreJuego: { $regex: new RegExp(palabraBusqueda, 'i') } },
			  // Otros campos de búsqueda relacionados con el juego, si los hay
			],
		  },
		],
	  };
	
	//Hacemos la consulta
	const videojuego = await videojuegos.find(query).toArray();
	

	console.log("Consulta ejecutada...");

	res.end(JSON.stringify(videojuego));

};


exports.busquedaVid_usuario_consola = async function (req, res) {

	//Nos conectamos a la BD
	const database = client.db(dbName);
	// Referencia a la coleccion
	const videojuegos = database.collection("videojuegos");
	// Recuperamos el valor del parametro
	const nombreUsuario = req.params.username;

	const palabraBusqueda = req.params.busqueda;
	
	//Declaramos los filtros
	const query = {
		$and: [
		  { username: nombreUsuario },
		  {
			$or: [
			  { plataforma: { $regex: new RegExp(palabraBusqueda, 'i') } },
			  // Otros campos de búsqueda relacionados con el juego, si los hay
			],
		  },
		],
	  };
	
	//Hacemos la consulta
	const videojuego = await videojuegos.find(query).toArray();
	

	console.log("Consulta ejecutada...");

	res.end(JSON.stringify(videojuego));

};

exports.agregar_log = async function (req, res) {

	//Nos conectamos a la BD
	const database = client.db(dbName);
	// Referencia a la coleccion
	const log = database.collection("log");

	const nuevoLog = req.body;

	const result = await log.insertOne(nuevoLog);
	
	console.log(`Registro creado: ${result.insertedId}`);
	
	res.end();

};


exports.busquedaLog_usuario = async function (req, res) {

	//Nos conectamos a la BD
	const database = client.db(dbName);
	// Referencia a la coleccion
	const log = database.collection("log");
	// Recuperamos el valor del parametro
	var nombreUsuario = req.params.username;
	//Declaramos los filtros
	const query = { username: nombreUsuario};
	//Hacemos la consulta
	const logs = await log.find(query).toArray();
	

	console.log("Consulta1234 ejecutada...");

	res.end(JSON.stringify(logs));


};

exports.log_busqueda_por_fecha = async function (req, res) {
	console.log("Función busquedaLog_fecha ejecutada");

	const database = client.db(dbName);
    // Referencia a la colección
    const log = database.collection("log");

    // Recuperamos los parámetros de la solicitud
    const fechaInicio = new Date(req.query.fechaEvento);
	console.log("Fecha de evento:", fechaInicio);
    // Construimos la consulta para obtener los eventos en el rango de fechas
    const query = {
      fechaEvento: {
        $gte: fechaInicio
      },
    };

    // Realizamos la consulta en la base de datos
    const eventosEnRango = await log.find(query).toArray();
	console.log("Eventos encontrados:", eventosEnRango);

    res.status(200).json(eventosEnRango);

};


exports.busqueda_log_palabra = async function (req, res) {

	//Nos conectamos a la BD
	const database = client.db(dbName);
	// Referencia a la coleccion
	const log = database.collection("log");
	// Recuperamos el valor del parametro
	const nombreUsuario = req.params.username;

	const palabraBusqueda = req.params.busqueda;
	
	//Declaramos los filtros
	const query = {
		$and: [
		  { username: nombreUsuario },
		  {
			$or: [
			  { evento: { $regex: new RegExp(palabraBusqueda, 'i') } },
			  // Otros campos de búsqueda relacionados con el juego, si los hay
			],
		  },
		],
	  };
	
	//Hacemos la consulta
	const logs = await log.find(query).toArray();
	

	console.log("Consulta ejecutada...");

	res.end(JSON.stringify(logs));

//Ejemplo de ejecucion 
};

exports.login = async function (req, res) {
    const { username, contrasena } = req.body;

    // Connect to the database
    const database = client.db(consultaVJ);
    const usersCollection = database.collection("usuarios"); // Assuming you have a "users" collection

    // Check the credentials in the database
    const user = await usersCollection.findOne({ username, contrasena });

    if (user) {
        // Valid credentials
        res.status(200).json({ message: 'Login successful' });
    } else {
        // Invalid credentials
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

