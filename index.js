const express = require('express')
const app = express()

const { sequelize } = require('./repository/dbcon.js')

const userRouter = require('./routers/User')

const saltRounds = 10
const myPlaintextPassword = 's0//P4$$w0rD'

const hash = require('./service/Hash.js')

const pass = hash(myPlaintextPassword, saltRounds)

console.log(pass)

// синхронизация с базой данных
// sequelize
//   .sync()
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err) => console.log(err))

app.use(express.json())
app.use('/user', userRouter)

sequelize.sync().then((result) => {
  // слушаем сервер
  app.listen(3005, () => {
    console.log('Server running')
  })
})
