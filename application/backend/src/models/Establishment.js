const { Model, DataTypes } = require('sequelize')

class Establishment extends Model {
    static init(sequelize) {
        super.init({
            regNumber: DataTypes.STRING,
            name: DataTypes.STRING,
            zipcode: DataTypes.STRING,
            state: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.STRING           
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.belongsTo(models.Item, { foreignKey: 'establishment_id', through: 'menus', as: 'item' });
    }
}

module.exports = Establishment;