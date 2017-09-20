// Drar inn filer og packager
// Drar inn packagen dersom man ikke nevner noen path
//const express = require('express');
//const app = express();
//
//app.get('/', function(req, res) {
//    res.send('Hello World!');
//    // res.send betyr send ting tilbake til bruker
//});
//
//app.listen(3000, function() {
//    console.log('Example app listening on port 3000!');
//});

const debug = require('debug');
const Server = require('./app/classes/Server');
const Database = require('./app/classes/Database');

if (!module.parent) {
    Database.connect();
}

debug('App:server')('Starting process');

const port = Server.normalizePort(process.env.PORT || 3000);

Server.start(port);
