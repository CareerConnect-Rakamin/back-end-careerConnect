const { body, param } = require('express-validator');

const requirements = {
  login: [
    body('email').isEmail(),
    body('password').isString().isLength({ min: 8 })
  ],

  registerJobSeeker: [
    body('email').isEmail(),
    body('password').isString().isLength({ min: 8 }),
    body('full_name').isString().notEmpty(),
    body('gender').isIn(['F', 'M']),
    body('place_of_birth').isString().notEmpty(),
    body('date_of_birth').matches(/^\d{2}-\d{2}-\d{4}$/)
  ]
};

module.exports = requirements;
