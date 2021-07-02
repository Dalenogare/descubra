const Establishment = require ('../models/Establishment')
const Item = require ('../models/Item')

module.exports = {
    
    async index(req, res) {
        const items = await Item.findAll();
        return res.json(items);
    },

    async establishmentItems(req, res) {
        const { establishment_id } = req.params;

        const establishment = await Establishment.findByPk(establishment_id, {
            include: { association: 'items' }
        });

        if (!establishment) {
            return res.status(400).json({ error: 'User not found' });
        }

        if(establishment.items.length == 0) {
            return res.json('Este usuário não possui items: ');
        }

        return res.json(establishment.items)

    },

    async store(req, res) {
        const { establishment_id } = req.params;
        const { name, description, value } = req.body;

        const establishment = await Establishment.findByPk(establishment_id)
        
        if (!establishment) {
            return res.status(400).json({ error: 'Establishment not found' });
        }

        const item = await Item.create({
            name,
            description,
            value,
            establishment_id
        });

        return res.json(item);
    },

    async delete(req, res) {
        await Item.destroy({
            where: { 
                id: req.params.id
            }
        })
        return res.json("Item deletado")
    }
}