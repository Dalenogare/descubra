const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const User = require('../models/User');
const Establishment = require('../models/Establishment');
const Item = require('../models/Item');
// const Tech = require('../models/Tech');

const connection = new Sequelize(dbConfig);

User.init(connection);
Establishment.init(connection);
// Tech.init(connection)

Establishment.associate(connection.models);
User.associate(connection.models);
// Tech.associate(connection.models);



module.exports = connection;
