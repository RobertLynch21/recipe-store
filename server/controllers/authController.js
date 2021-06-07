const bcrypt = require('bcryptjs')


module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [result] = await db.auth.check_email(email)//Research this line of code. 
        if(result){
            return res.status(409).send("email is already in use")
        }
        const salt = bcrypt.genSaltySync(10)//Research this line. 
        const hash = bcrypt.hashSync(password, salt)//Research this line, password from req.body
        const [user] = await db.auth.registher_user(email, hash)
        const [cart] = await db.cart.create_cart(user.user_id)
        delete user.password
        req.session.user = user
        req.session.user.cart_id = cart.cart_id
        return res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [user] = await db.auth.check_email(email)
        if(!user){
            return res.status(401).send("User Not Found")
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated){
            return res.status(401).send("Password Incorrect")
        }
        const [cart] = await db.cart.get_cart(user.user_id)
        delete user.password
        req.session.user = user
        return res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {
        if(req,session.user){
            res.status(200).send(req.session.user);
        }else{
            res.sendStatus(403);
        }

    }
}
