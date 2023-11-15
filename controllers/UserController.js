const db = require('../repository/dbcon')
const User = db.user

class UserController {
  getUser(req, res) {
    // получение всех данных
    User.findAll({ raw: true })
      .then((users) => {
        console.log(users)
      })
      .catch((err) => console.log(err))
  }

  createUser(req, res) {
    const name = req.body.name
    // создание пользователя
    User.create({
      name: name,
      age: 35,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }
}

module.exports = new UserController()
