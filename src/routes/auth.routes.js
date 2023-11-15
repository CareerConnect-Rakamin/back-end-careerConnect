const { Router } = require('express');
const { authController } = require('../controllers');
const { validator } = require('../middlewares');

const router = Router();
const { validate, requirements } = validator;

router
  .route('/login')
  .post([validate(requirements.login)], authController.login);

module.exports = router;
