const express = require('express');
const app = express()
app.use(express.json());
const port = 3000;
//All API routes exist in ./routes/games.js
const api = require('./routes/games');
app.use('/games', api);

//If a get request is made for localhost:3000/ return that it is an invalid endpoint.
app.get('/', (req, res) => {
    res.send("Invalid endpoint.")
});

app.listen(port, () => {
    console.log("Server listening on port ", port);
});