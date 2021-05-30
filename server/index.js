require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

const app = express();
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;


app.use(express.json());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: { maxAge: 6000}
    })
)

// DB Connection

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( db => {
    app.set('db', db)
    console.log('Connected to the DataBase')
})

//endpoints
// app.post('/api/auth/register', userCtrl.register);
// app.post('/api/auth/login', userCtrl.login);
// app.get('/api/auth/me', userCtrl.getUser);
// app.post('/api/auth/logout', userCtrl.logout);

// //Post Endpoints
// app.get('/api/posts', postCtrl.readPosts);
// app.post('/api/post', postCtrl.createPost);
// app.get('/api/post/:id', postCtrl.readPost);
// app.delete('/api/post/:id', postCtrl.deletePost)

//Listen

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))