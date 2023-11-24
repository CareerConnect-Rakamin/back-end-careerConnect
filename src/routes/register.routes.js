const { Router } = require('express')
const { registerController } = require('../controllers')
const { validator } = require('../middlewares')

const router = Router()
const { validate, requirements } = validator

router
  .route('/register')
  .post([validate(requirements.register)], registerController.register)

module.exports = router
