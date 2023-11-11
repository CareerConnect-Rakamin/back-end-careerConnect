const { body, param } = require('express-validator')

const requirements = {
  getCompanyById: [param('id').isInt({ min: 1 })],

  updateCompanyById: [
    param('id').isInt({ min: 1 }),
    body('photo_profile').isString().isLength({ min: 1 }),
    body('name').isString().isLength({ min: 3 }),
    body('type')
      .isString()
      .isIn([
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Retail',
        'Entertainment',
        'Manufacturing',
        'Consulting',
        'Energy',
      ]),
    body('email').isString().isLength({ min: 3 }),
    body('website').isString(),
    body('phone_number').isString(),
    body('address').isString(),
  ],
}

module.exports = requirements
