'use strict';

module.exports = function (app) {

	var gamesCollection = require('./gamesCollectionController');
	app.route('/usuarios/:correo')
		.get(gamesCollection.obtener_info_usuario);
	
	app.route('/autenticar')
        .post(gamesCollection.autenticar_usuario);

	app.route('/videojuegos/:username')
        .get(gamesCollection.busquedaVid_usuario);

	app.route('/videojuegos/buscar/:username/:busqueda')
		.get(gamesCollection.busquedaVid_usuario_palabra);
	
	app.route('/videojuegos/buscarPlataforma/:username/:busqueda')
		.get(gamesCollection.busquedaVid_usuario_consola);
		
	app.route('/log/nuevo')
		.post(gamesCollection.agregar_log);

	app.route('/log/eventos-por-rango-fecha')
		.get(gamesCollection.log_busqueda_por_fecha);
	app.route('/log/:username')
		.get(gamesCollection.busquedaLog_usuario);
	app.route('/log/busqueda/:username/:busqueda')
		.get(gamesCollection.busqueda_log_palabra);

};