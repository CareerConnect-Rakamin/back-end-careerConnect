const { body } = require('express-validator');

const requirements = {
  login: [
    body('email').isEmail(),
    body('password').isString().isLength({ min: 5 })
  ]
};

module.exports = requirements;
