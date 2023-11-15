const express = require('express');
const { companiesController } = require('../controllers');

const router = express.Router();

router.get('/', companiesController.getCompaniesController);

module.exports = router;
