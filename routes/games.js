const express = require('express');
const router = express.Router();
//Databse pool.
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'pencrud',
    host: 'localhost',
    database: 'collection',
    password: 'secret',
    port: 5432,
});

//CREATE.

//API route for adding a game.
router.post('/addGame', (req, res) => {
    //The title, publisher, system, and release year are pulled from the request body.
    const {title, publisher, system, releaseYear} = req.body;
    //Query is sent.
    pool.query('INSERT INTO games (title, publisher, system, release_year) VALUES ($1, $2, $3, $4)', [title, publisher, system, releaseYear] , (error) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Game added successfully.`);
    })
});

//READ.

//API route for returning everything in the 'games' table.
router.get('/allGames', (req, res) => {
    //Query is sent.
    pool.query('SELECT * FROM games ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        //Return the results of the query.
        res.status(200).json(results.rows);
    })
});

//API route for returning based on ID.
router.get('/getUser/:id', (req, res) => {
    //ID is pulled from the request params.
    const id = parseInt(req.params.id);
    //Query is sent.
    pool.query('SELECT * FROM games WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        //Return the results of the query.
        res.status(200).json(results.rows);
    })
})

//UPDATE.

//API route for updating based on ID.
router.post('/updateGame/:id', (req, res) => {
    //ID is pulled from the request params, and the body is provides the title, publisher, system, and release year.
    const id = parseInt(req.params.id);
    const {title, publisher, system, releaseYear} = req.body;
    //Query is sent.
    pool.query('UPDATE games SET title=$1, publisher=$2, system=$3, release_year=$4 WHERE id=$5', [title, publisher, system, releaseYear, id], (error) => {
        if (error) {
            throw error;
        }
        //Return a message stating that the update went through.
        res.status(200).send(`User with ID of '${id}' modified successfully.`)
    });
});


//DELETE.

//APIE route for deleting based on ID.
router.post('/deleteGame/:id', (req, res) => {
    //ID is pulled from the request params.
    const id = parseInt(req.params.id);
    //Query is sent.
    pool.query('DELETE FROM games WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        //Return a message that the update went through.
        res.status(200).send("Game with ID of '${id}' deleted successfully.");
    })
});

module.exports = router