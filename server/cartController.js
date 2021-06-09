module.exports = {
    getCart: (req, res) => {
        const {user} = req.session
        if(!user){
            res.status(500).send("User not logged in.")
        }
    },
    addToCart: (req,res) => {}
}