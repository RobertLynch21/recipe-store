require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');


const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

// Controllers
const authCtrl = require("./controllers/authController")
const productsCtrl = require('./controllers/productController')
const cartCtrl = require('./controllers/cartController')
// const submitCtrl = require('./controllers/submitCtrl')

//APP INSTANCE

const app = express();

// TOP LEVEL MIDDLEWARE
app.use(express.json());
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: { maxAge: 6000 * 60 * 60 * 24 *7 }
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
// Auth
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.delete('/auth/logout', authCtrl.logout);
app.get('/auth/getUser', authCtrl.getUser)

// Products
app.get('/api/products', productsCtrl.getProducts)

// Cart
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:product_id', cartCtrl.addToCart)
app.delete('/api/cart/:product_id', cartCtrl.deleteItemFromCart)
app.put('/api/cart/:product_id', cartCtrl.changeCartQty)