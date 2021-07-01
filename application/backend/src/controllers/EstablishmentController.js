const User = require('../models/User');
const Establishment = require('../models/Establishment');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'establishments' }
        });
        if(!user){
            return res.status(400).json({ error: 'User not found' });
        }
        else if(user.establishments.length == 0){
            return res.json("Este usuário não possui estabelecimento");       
        }
        return res.json(user.establishments);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { regNumber, name, zipcode, state, street, number } = req.body;

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const establishment = await Establishment.create({
            regNumber, 
            name, 
            zipcode,
            state, 
            street, 
            number
        });

        return res.json(establishment)
    }
}