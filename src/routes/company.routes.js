const { companyControllers } = require('../controllers')

const router = require('express').Router()

router.get('/:id', companyControllers.getCompanyById)

module.exports = router
