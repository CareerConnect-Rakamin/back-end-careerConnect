const { validationResult } = require('express-validator')
const registerRequirements = require('./register.requirements') // Tambahkan ini
const logger = require('../../utils/logger')

const requirements = {
  ...registerRequirements,
}

function validate(validations) {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)))
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    logger.error({ error: errors.array() })
    return res.status(400).json({
      status: 'failed',
      message: 'Invalid input',
      error: { details: errors.array() },
    })
  }
}

module.exports = {
  requirements,
  validate,
}
