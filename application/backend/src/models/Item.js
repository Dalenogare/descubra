const { Model, DataTypes } = require('sequelize')

class Item extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            value: DataTypes.FLOAT,         
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Establishment, { foreignKey: 'establishment_id', as: 'establishment' });
    }
}

module.exports = Item;