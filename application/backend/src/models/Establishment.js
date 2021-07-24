const { Model, DataTypes } = require('sequelize')

class Establishment extends Model {
    static init(sequelize) {
        super.init({
            register_number: DataTypes.STRING,
            name: DataTypes.STRING,
            zipcode: DataTypes.STRING,
            state: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.STRING,
            type: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.hasMany(models.Item, { foreignKey: 'establishment_id',  as: 'items' });
    }
}

module.exports = Establishment;