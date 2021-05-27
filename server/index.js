require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

const app = express();
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;


app.use(express.json());

// DB Connection

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( db => {
    app.set('db', db)
    console.log('Connected to the DataBase')
})

//endpoints

//Listen

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))