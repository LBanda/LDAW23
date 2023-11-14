'use strict';
var fs = require("fs");
module.exports.obtener_juegos = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        console.log(err);
        console.log(data);
        res.end(data);
    });
};
module.exports.agregar_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        const array = JSON.parse(data);
        console.log(err);
        console.log(data);
        const nuevo = req.body;
        array.push(nuevo);
        fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(array), 'utf8', function (err, data) {
            console.log(err);
            res.end(err);
        });
        res.end(JSON.stringify(array));
    });
};

module.exports.eliminar_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {

        const juegos = JSON.parse(data);

        const juego = juegos[req.params.gameIndex];

        if (!juego) {
            return res.status(404).send("El juego no existe");
        }

        juegos.splice(juegos.indexOf(juego), 1);

        fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(juegos), 'utf8', function (err) {
            if (err) {
                return res.status(500).send("Error al actualizar el archivo juegos.json");
            }
            res.status(200).send("Juego eliminado con éxito");
        });
    });
};


module.exports.obtener_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        const juegos = JSON.parse(data);
        const juego = juegos[req.params.gameIndex]
        console.log(juego);
        res.end(JSON.stringify(juego));
    });
};

module.exports.buscar_juegos = function (req, res) {

    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        const juegos = JSON.parse(data);
        const keyword = req.query.keyword;

        const resultados = juegos.filter(juego => juego.nombre.toLowerCase().includes(keyword.toLowerCase()))

        console.log(resultados)
        res.json(resultados);
    });
};
