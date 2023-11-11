const { companyControllers } = require('../controllers')
const { authMiddlewares } = require('../middlewares')
const router = require('express').Router()
const { validator } = require('../middlewares')

const { validate, requirements } = validator
router.use(authMiddlewares)
router.get(
  '/:id',
  [validate(requirements.getCompanyById)],
  companyControllers.getCompanyById,
)
router.put(
  '/:id',
  [validate(requirements.updateCompanyById)],
  companyControllers.updateCompanyById,
)

module.exports = router