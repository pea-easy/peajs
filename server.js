#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./index');
var http = require('http');


var port = process.env.PORT || 8899;

/**
 * Create HTTP server.
 */

var server = http.createServer(app.callback());

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    console.log('error',error);
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
        /*eslint no-console: */
    console.log('listen to '+bind);
}
