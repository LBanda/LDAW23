// https://expressjs.com/en/guide/using-middleware.html
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8585;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var routes = require('./gamesCollectionRoutes');
routes(app);
app.listen(port);
console.log('Servidor escuchando en puerto: ' + port);