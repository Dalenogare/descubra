const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async store(req, res) {
        const { name, email, password } = req.body;

        const user = await User.create({ 
            name, 
            email,
            password
        })

        return res.json(user);
    },

    async delete (req, res) {
        await User.destroy({
            where: { 
                id: req.params.id
            }
        })
        return res.json("Usuário deletado")
    }
}