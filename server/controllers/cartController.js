// const { decodeBase64 } = require("bcryptjs")

module.exports = {
    getCart: (req, res) => {
        const db = req.app.get("db")
        const {user} = req.session
        if(!user){
          return  res.status(500).send("User not logged in.")
        }
        db.cart.get_cart_items(user.cart_id).then(cartProducts => {
            res.status(200).send(cartProducts)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    addToCart: (req,res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {product_id} = req.params
        if(!user){
            return res.status(500).send("User not logged in.")
        }
        db.cart.add_to_cart(user.cart_id, product_id)
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    deleteItemFromCart: (req, res) => {
        const db = req.app.db('db')
        const {user} = req.session
        const {product_id} = req.params
        if(!user){
            return res.status(500).send('User not logged in!')
        }
    },
    changeCartQty: (req, res) => {}
}