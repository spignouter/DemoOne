const db = require('../repository/dbcon')
const User = db.user

class UserController {
  getUser(req, res) {
    // получение всех данных
    User.findAll({ raw: true })
      .then((users) => {
        res.status(200).send(users)
        console.log(users)
      })
      .catch((err) => console.log(err))
  }

  createUser(req, res) {
    const name = req.body.name
    const password = req.body.password
    const age = req.body.age

    // создание пользователя
    User.create({
      name: name,
      password: password,
      age: age,
    })
      .then((dat) => {
        res.status(200).send(dat)
        console.log(dat)
      })
      .catch((err) => console.log(err))
  }

  deleteUser(req, res) {
    const id = req.body.id
    User.destroy({
      where: {
        id: id,
      },
    })
      .then((del) => {
        res.status(200).send(del)
        console.log(del)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  updateUser(req, res) {
    const id = req.body.id
    const name = req.body.name
    const age = req.body.age
    const upAge = req.body.upAge
    User.update(
      { age: upAge },
      {
        where: {
          id: id,
          name: name,
          age: age,
        },
      }
    )
      .then((up) => {
        res.status(200).send(up)
        console.log(up)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = new UserController()
