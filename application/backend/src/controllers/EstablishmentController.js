const User = require('../models/User');
const Establishment = require('../models/Establishment');

module.exports = {

    async index(req, res) {
        const establishments = await Establishment.findAll();
        return res.json(establishments);
    },

    async userEstablishment(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'establishment' }
        });

        if(user){
            if(user.establishment == null){
                return res.json("Este usuário não possui estabelecimento");       
            }    
        }

        else {
            return res.status(400).json({ error: 'User not found' });
        }

        return res.json(user);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { register_number, name, zipcode, state, city, street, number, type } = req.body;
        
        const user = await User.findByPk(user_id)

        const alreadyHasEstablishment = await Establishment.findOne(
            {
                where: { 
                    user_id: user_id
                }
            })

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        if (alreadyHasEstablishment) {
            return res.status(400).json({ error: 'Usuário já possui estabelecimento' });
        }

        const establishment = await Establishment.create({
            register_number, 
            name, 
            zipcode,
            state, 
            city,
            street, 
            number,
            type,
            user_id
        });

        return res.json(establishment)
        
    }
}