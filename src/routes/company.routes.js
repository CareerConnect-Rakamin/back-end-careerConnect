const { companyControllers } = require('../controllers')
const { authMiddlewares } = require('../middlewares')
const router = require('express').Router()

router.use(authMiddlewares)
router.get('/:id', companyControllers.getCompanyById)
router.put('/:id', companyControllers.updateCompanyById)

module.exports = router
