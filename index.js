const express = require('express')
const app = express()

const { sequelize } = require('./repository/dbcon.js')

const userRouter = require('./routers/User')

// синхронизация с базой данных
sequelize
  .sync()
  .then((result) => {
    console.log(result)
  })
  .catch((err) => console.log(err))

app.use(express.json())
app.use('/user', userRouter)

// слушаем сервер
app.listen(3005, () => {
  console.log('Server running')
})
