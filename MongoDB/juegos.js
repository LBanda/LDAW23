//Creamos la base de datos
//use videojuegosdb
//Creamos la coleccion de consolas
db.createCollection("consolas")
//Insertamos una consola
db.consolas.insertOne({"_id":"ps4", "nombre":"Playstation 4", "juegos":[0,1,2]})
//Creamos la coleccion de videojuegos
db.createCollection("juegos")
//Insertamos 4 juegos
db.juegos.insertOne({"_id":0, "nombre":"Juego PS4 1", "developer":"Developer 1"})
db.juegos.insertOne({"_id":1, "nombre":"Juego PS4 2", "developer":"Developer 2"})
db.juegos.insertOne({"_id":2, "nombre":"Juego PS4 3", "developer":"Developer 3"})
db.juegos.insertOne({"_id":3, "nombre":"Juego PS4 4", "developer":"Developer 4"})
//https://docs.mongodb.com/manual/reference/method/cursor.forEach/
//La funcion find() regresa un cursor, el cual tiene un metodo forEach que nos
// ayuda a iterar el cursor. Aqui, lo que hacemos es obtener el arreglo de
// IDs de juegos de una consola en especifico, y por cada ID realizamos
// la busqueda sobre la coleccion de juegos.
db.consolas.find({"_id":"ps4"},{"_id":0, "juegos":1}).forEach(function(consola){
consola.juegos.forEach(function(idJuego){
db.juegos.find({"_id":idJuego}).forEach(function(documento){
print(documento);
});
})
})

//Creamos la coleccion de consolas 2
db.createCollection("consolas2")
//Insertamos una consola
db.consolas2.insertOne({"_id":"ps4", "nombre":"Playstation 4", "juegos":[{"_id":0,
"nombre":"Juego PS4 1", "developer":"Developer 1"},{"_id":1, "nombre":"Juego PS4 2",
"developer":"Developer 2"},{"_id":2, "nombre":"Juego PS4 3", "developer":"Developer 3"},{"_id":3, "nombre":"Juego PS4 4", "developer":"Developer 4"}]})
//aggregate: Permite procesar los registros de una colección utilizando una secuencias de
// operaciones. En este caso esas operaciones son unwind, match, y project.
//unwind: Genera un documento independiente por cada elemento del arreglo
// especificado.
//match: Discrimina los documentos en base al filtro especificado.
//project: Indica los campos que queremos visualizar de los documentos.
db.consolas2.aggregate([
{ $unwind: '$juegos'},
{ $match: {'juegos.nombre': /1/i }},
{ $project: { _id: 0, nombre: '$juegos.nombre', developer: '$juegos.developer' } }
]);