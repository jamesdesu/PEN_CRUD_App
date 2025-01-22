const express = require('express');
const cors = require('cors');
const corsOption = {
    credentials: true,
    origin: ['http://localhost:4200', 'http://127.0.0.1:4200']
}
const app = express();

app.use(express.json());
app.use(cors(corsOption));
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