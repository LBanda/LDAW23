'use strict';
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = 'alumnos_servicio';
exports.obtener_estudiantes = async function (req, res) {
    //Nos conectamos a la BD
    const database = client.db(dbName);
    // Referencia a la coleccion
    const alumnos = database.collection("alumnos");
    // Consulta sin filtros
    const query = {};
    const options = {
        // Indicamos las columnas que queremos obtener en el resultado
        projection: { nombre: 1, matricula: 1 },
    };
    // Hacemos la consulta
    const cursor = alumnos.find(query, options);
    cursor.toArray().then((data) => {
        console.log("Resultados Obtenidos: " + data.length);
        res.end(JSON.stringify(data));
    });
};
exports.obtener_estudiante = async function (req, res) {
    //Nos conectamos a la BD
    const database = client.db(dbName);
    // Referencia a la coleccion
    const alumnos = database.collection("alumnos");
    // Recuperamos el valor del parametro
    var matriculaAlumno = req.params.matricula;
    // Declaramos los filtros
    const query = { matricula: matriculaAlumno };
    // Hacemos la consulta
    const alumno = await alumnos.findOne(query);
    console.log("Consulta ejecutada...");
    res.end(JSON.stringify(alumno));
};
exports.agregar_estudiante = async function (req, res) {
    //Nos conectamos a la BD
    const database = client.db(dbName);
    // Referencia a la coleccion
    const alumnos = database.collection("alumnos");
    var nuevoAlumno = req.body;
    const result = await alumnos.insertOne(nuevoAlumno);
    console.log(`Registro creado: ${result.insertedId}`);
    res.end();
};


exports.buscar_palabra_clave = async function (req, res) {
    //Nos conectamos a la BD
    const database = client.db(dbName);
    // Referencia a la coleccion
    const alumnos = database.collection("alumnos");
    // Obtenemos el valor del parametro
    var palabraClave = req.params.palabraClave;
    // Declaramos los filtros
    const query = { nombre: new RegExp(palabraClave, 'i') };
    // Hacemos la consulta
    const cursor = alumnos.find(query);
    cursor.toArray().then((data) => {
        console.log("Resultados Obtenidos: " + data.length);
        res.end(JSON.stringify(data));
    });
};

exports.obtener_materias_estudiante = async function (req, res) {
    //Nos conectamos a la BD
    const database = client.db(dbName);
    // Referencia a la coleccion
    const alumnos = database.collection("alumnos");
    // Recuperamos el valor del parametro
    var matriculaAlumno = req.params.matricula;
    // Declaramos los filtros
    const query = { matricula: matriculaAlumno };
    const options = {
        // Indicamos las columnas que queremos obtener en el resultado
        projection: { _id: 0, "materias.nombre": 1 },
    };
    // Hacemos la consulta
    const materia = await alumnos.findOne(query, options);
    console.log("Consulta ejecutada...");
    res.end(JSON.stringify(materia));
};

exports.obtener_materias_aggregate = async function (req, res) {
    //Nos conectamos a la BD
    const database = client.db(dbName);
    // Referencia a la coleccion
    const alumnos = database.collection("alumnos");
    var palabraClave = req.params.palabraClave;
    // Hacemos la consulta
    const resultado = alumnos.aggregate([
        { $unwind: '$materias' },
        { $match: { 'materias.nombre': new RegExp(palabraClave, 'i') } },
        { $project: { _id: 0, nombre: '$materias.nombre' } }
    ]);
    resultado.toArray().then((data) => {
        console.log("Resultados Obtenidos: " + data.length);
        res.end(JSON.stringify(data));
    });
};
