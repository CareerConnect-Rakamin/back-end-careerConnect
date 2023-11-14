const { validationResult } = require('express-validator');
const companiesRequirements = require('./companies.requirements');

const requirements = {
  ...companiesRequirements
};

function validate(validations) {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(400).json({
      status: 'Failed',
      message: 'Invalid input',
      errors: errors.array()
    });
  };
}

module.exports = {
  requirements,
  validate
};
