
const http = require('http');
// const app = require('./app');

const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

const port = process.env.PORT || 8080;

// const server = http.createServer(app);

server.listen(port);