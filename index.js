const http = require('node:http');
const port = 3000;

const server = http.createServer((request, response) => {
    response.end('request recibido')
});

server.listen(port, () => {
    console.log('puerto y servidor funcionando');
})