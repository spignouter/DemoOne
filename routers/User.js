const express = require('express')
const router = express.Router()

const controller = require('../controllers/UserController')

router.get('/', controller.getUser)

router.post('/', controller.createUser)

// router.put('/', controller)

router.delete('/', controller.deleteUser)

router.patch('/', controller.updateUser)

module.exports = router
