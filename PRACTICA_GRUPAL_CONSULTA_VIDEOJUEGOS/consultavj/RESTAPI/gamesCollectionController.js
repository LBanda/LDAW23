'use strict';

const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = 'consultaVJ';

exports.obtener_info_usuario = async function (req, res) {

	const database = client.db(dbName);
	const usuarios = database.collection("usuarios");
	var correoUsuario = req.params.correoElectronico;
	const query = { correo: correoUsuario};
	const usuario = await usuarios.findOne(query);
	console.log("Consulta ejecutada...");
	res.end(JSON.stringify(usuario));

};

exports.autenticar_usuario = async function (req, res) {

	const database = client.db(dbName);
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

	const database = client.db(dbName);
	const videojuegos = database.collection("videojuegos");
	var nombreUsuario = req.params.username;
	const query = { username: nombreUsuario};
	const videojuego = await videojuegos.find(query).toArray();
	

	console.log("Consulta ejecutada...");

	res.end(JSON.stringify(videojuego));


};

exports.busquedaVid_usuario_palabra = async function (req, res) {

	const database = client.db(dbName);
	const videojuegos = database.collection("videojuegos");
	const nombreUsuario = req.params.username;

	const palabraBusqueda = req.params.busqueda;
	
	const query = {
		$and: [
		  { username: nombreUsuario },
		  {
			$or: [
			  { nombreJuego: { $regex: new RegExp(palabraBusqueda, 'i') } },
			],
		  },
		],
	  };
	
	const videojuego = await videojuegos.find(query).toArray();
	

	console.log("Consulta ejecutada...");

	res.end(JSON.stringify(videojuego));

};


exports.busquedaVid_usuario_consola = async function (req, res) {

	const database = client.db(dbName);
	const videojuegos = database.collection("videojuegos");
	const nombreUsuario = req.params.username;

	const palabraBusqueda = req.params.busqueda;
	
	const query = {
		$and: [
		  { username: nombreUsuario },
		  {
			$or: [
			  { plataforma: { $regex: new RegExp(palabraBusqueda, 'i') } },
			],
		  },
		],
	  };
	
	const videojuego = await videojuegos.find(query).toArray();
	

	console.log("Consulta ejecutada...");

	res.end(JSON.stringify(videojuego));

};

exports.agregar_log = async function (req, res) {

	const database = client.db(dbName);
	const log = database.collection("log");

	const nuevoLog = req.body;

	const result = await log.insertOne(nuevoLog);
	
	console.log(`Registro creado: ${result.insertedId}`);
	
	res.end();

};


exports.busquedaLog_usuario = async function (req, res) {

	const database = client.db(dbName);
	const log = database.collection("log");
	var nombreUsuario = req.params.username;
	const query = { username: nombreUsuario};
	const logs = await log.find(query).toArray();
	

	console.log("Consulta1234 ejecutada...");

	res.end(JSON.stringify(logs));


};

exports.log_busqueda_por_fecha = async function (req, res) {
	console.log("Función busquedaLog_fecha ejecutada");

	const database = client.db(dbName);
    const log = database.collection("log");

    const fechaInicio = new Date(req.query.fechaEvento);
	console.log("Fecha de evento:", fechaInicio);
    const query = {
      fechaEvento: {
        $gte: fechaInicio
      },
    };

    const eventosEnRango = await log.find(query).toArray();
	console.log("Eventos encontrados:", eventosEnRango);

    res.status(200).json(eventosEnRango);

};


exports.busqueda_log_palabra = async function (req, res) {

	const database = client.db(dbName);
	const log = database.collection("log");
	const nombreUsuario = req.params.username;

	const palabraBusqueda = req.params.busqueda;
	
	const query = {
		$and: [
		  { username: nombreUsuario },
		  {
			$or: [
			  { evento: { $regex: new RegExp(palabraBusqueda, 'i') } },
			],
		  },
		],
	  };
	
	const logs = await log.find(query).toArray();
	

	console.log("Consulta ejecutada...");

	res.end(JSON.stringify(logs));

};

exports.login = async function (req, res) {
    const { username, contrasena } = req.body;

    const database = client.db(dbName);
    const usersCollection = database.collection("usuarios"); 

    const user = await usersCollection.findOne({ username, contrasena });

    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

