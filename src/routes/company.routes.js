const { companyControllers } = require('../controllers')

const router = require('express').Router()

router.get('/:id', companyControllers.getCompanyById)
router.put('/:id', companyControllers.updateCompanyById)

module.exports = router
