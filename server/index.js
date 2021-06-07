require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authController = require("./controllers/authController")
const submitCtrl = require('')



const app = express();
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

// TOP LEVEL MIDDLEWARE
app.use(express.json());
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: { maxAge: 6000 }
    }))

// DATABASE CONNECTION
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( db => {
    app.set('db', db)
    console.log('Connected to the DataBase')
    app.listen(SERVER_PORT, () => console.log
    (`Listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err))



// ENDPOINTS
app.post('/api/auth/register', authController.register);
app.post('/api/auth/login', authController.login);
app.get('/api/auth/me', authController.getUser);
app.delete('/api/auth/logout', authController.logout);

// // POST ENDPOINTS
// app.get('/api/posts', submitCtrl.readPosts);
// app.post('/api/post', submitCtrl.createPost);
// app.get('/api/post/:id', submitCtrl.readPost);
// app.delete('/api/post/:id', submitCtrl.deletePost)