const { body, param } = require('express-validator');

const requirements = {
  getCompanyById: [param('id').isInt({ min: 1 })],

  updateCompanyById: [
    param('id').isInt({ min: 1 }),
    body('name').isString().isLength({ min: 3 }),
    body('type').isIn([
      'Technology',
      'Healthcare',
      'Finance',
      'Education',
      'Retail',
      'Entertainment',
      'Manufacturing',
      'Consulting',
      'Energy'
    ]),
    body('email').isString().isLength({ min: 3 }).contains('@'),
    body('website').isString().contains('.'),
    body('phone_number').isString().isLength({ min: 9 }),
    body('address').isString().isLength({ min: 10 })
  ]
};

module.exports = requirements;
