const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hola mundo');
});


app.listen(port, () => {
    console.log(`Puerto activo en http://localhost:${port}`)
});
// https://youtu.be/xkHyM-K3Cd8?list=PLPl81lqbj-4Iy7yuRrVLn4V6isOVpvlpl
// https://bluuweb.github.io/desarrollo-web-bluuweb/20-01-node/#servidor-http