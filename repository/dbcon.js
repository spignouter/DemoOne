const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
})

const User = require('../models/User')(sequelize)

module.exports = {
  sequelize: sequelize,
  user: User,
}
