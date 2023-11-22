const { body, param, query } = require('express-validator');

const requirements = {
  getCompanies: [query('page').isInt({ min: 1 }).optional({ nullable: true })],

  getCompanyById: [param('id').isInt({ min: 1 })],

  updateCompanyById: [
    param('id').isInt({ min: 1 }).optional({ nullable: true }),
    body('password').isString({ min: 8 }).optional({ nullable: true }),
    body('name').isString().isLength({ min: 3 }).optional({ nullable: true }),
    body('type')
      .isIn([
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Retail',
        'Entertainment',
        'Manufacturing',
        'Consulting',
        'Energy'
      ])
      .optional({ nullable: true }),
    body('email')
      .isString()
      .isLength({ min: 3 })
      .contains('@')
      .optional({ nullable: true }),
    body('email_company')
      .isString()
      .isLength({ min: 3 })
      .contains('@')
      .optional({ nullable: true }),
    body('website').isString().contains('.').optional({ nullable: true }),
    body('phone_number')
      .isString()
      .isLength({ min: 9 })
      .optional({ nullable: true }),
    body('address')
      .isString()
      .isLength({ min: 10 })
      .optional({ nullable: true })
  ],

  createCompany: [
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
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
    body('address').isString().isLength({ min: 10 }),
    body('companyEmail').isEmail(),
    body('phone_number')
      .isString()
      .isLength({ min: 9 })
      .optional({ nullable: true }),
    body('website').isString().contains('.').optional({ nullable: true })
  ]
};

module.exports = requirements;
