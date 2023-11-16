const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
})

const Models = require('../models/User')

module.exports = {
  sequelize: sequelize,
  user: Models.user(sequelize),
}
