const http = require('http');
const app = require('./app'); //Imports app.js file, you can omit .js it automatically looks for .js file type

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);