const { validationResult, body } = require('express-validator')

const registerValidator = [
  body('full_name').isString().trim().notEmpty(),
  body('email').isEmail().normalizeEmail(),
  body('password').isString().isLength({ min: 8 }),
  body('gender').isString().trim().notEmpty(),
  body('phone_number').isString().trim().notEmpty(),
  body('address').isString().trim().notEmpty(),
  body('date_of_birth').isString().trim().notEmpty(),
]

module.exports = {
  registerValidator,
}
