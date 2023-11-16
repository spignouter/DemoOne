const Sequelize = require('sequelize')

// module.exports = function (sequelize) {
//   return sequelize.define('User', {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false,
//     },
//     name: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     age: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//     },
//   })
// }

class Models {
  user(sequelize) {
    return sequelize.define('User', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
  }
}

module.exports = new Models()
