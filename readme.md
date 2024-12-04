# Information
This is a backend for an application to control a game collection app. It uses Express and Node to interface with a Postgres database. As long as the backend is running, any frontend could be used to access the API in order to display the stored data in a prettier way.
# Getting Started
## Download the project and run `npm install`  
## Create the necessary database and table.  
If you are using psql, you can run the following commands:  
`CREATE ROLE pencrud WITH LOGIN PASSWORD 'secret';`  

`ALTER ROLE pencrud CREATEDB;`  
Log in to the pencrud role and run the following:  
`CREATE DATABASE collection;` 

`\c collection`  
If you are interested in having some existing data to play around with:  
`CREATE TABLE games ( ID SERIAL PRIMARY KEY, title VARCHAR(30), publisher VARCHAR(30), system VARCHAR(30), release_year VARCHAR(4) );`  

`INSERT INTO games (title, publisher, system, release_year) VALUES ('Plumbing Adventure', 'Red Cap Games', 'Capo Entertainment System', '1985'), ('Legendary Adventure', 'Red Cap Games', 'Capo Entertainment System', '1987'), ('Space Adventure', 'Red Cap Games', 'Capo Entertainment System', '1987')`  
## Use the API.
From here you can use something like Postman to interact with the data.