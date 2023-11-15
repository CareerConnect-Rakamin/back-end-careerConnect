const { validationResult } = require('express-validator');
const companyRequirements = require('./company.requirements');
const jobsRequirements = require('./jobs.requirements');
const authRequirements = require('./auth.requirements');

const requirements = {
  ...jobsRequirements,
  ...companyRequirements,
  ...authRequirements
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
