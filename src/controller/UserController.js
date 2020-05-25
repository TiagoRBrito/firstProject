const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
        const { name, email } = req.body;

        console.log(name, email);
        
        const user = await User.create({ name, email });

        if (!user){
            console.log("DEU MUITO RUIM");
        }

        return res.json(user);
    }
}