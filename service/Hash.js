const bcrypt = require('bcrypt')

module.exports = function (myPlaintextPassword, saltRounds) {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {})
  })
}
