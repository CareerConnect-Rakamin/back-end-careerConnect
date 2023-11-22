const { query, body, param } = require('express-validator');

const requirements = {
  updateJobSeeker: [
    param('id').isInt({ min: 1 }),
    body('email').isEmail().optional({ nullable: true }),
    body('password').isString({ min: 8 }).optional({ nullable: true }),
    body('fullname').isString().optional({ nullable: true }),
    body('bio').isString().optional({ nullable: true }),
    body('gender').isIn(['M', 'F']).optional({ nullable: true }),
    body('phone_number').isString().optional({ nullable: true }),
    body('address').isString().optional({ nullable: true }),
    body('place_of_birth').isString().optional({ nullable: true }),
    body('date_of_birth')
      .matches(/^\d{2}-\d{2}-\d{4}$/)
      .optional({ nullable: true }),
    body('link_portfolio').isURL().optional({ nullable: true })
  ],

  addCertificate: [body('name').isString({ min: 5 })]
};

module.exports = requirements;
