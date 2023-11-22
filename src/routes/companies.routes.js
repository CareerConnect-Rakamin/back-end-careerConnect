const { companiesController } = require('../controllers');
const { authMiddleware, uploadFileMiddleware } = require('../middlewares');
const { Router } = require('express');
const { validator } = require('../middlewares');
const { ROLES } = require('../utils/constants');

const router = Router();
const { validate, requirements } = validator;

router
  .route('/')
  .get([validate(requirements.getCompanies)], companiesController.getCompanies);

router
  .route('/:id')
  .get(
    [validate(requirements.getCompanyById)],
    companiesController.getCompanyById
  )
  .put(
    [
      authMiddleware.authenticate,
      validate(requirements.updateCompanyById),
      authMiddleware.verifyUser
    ],
    companiesController.updateCompanyById
  );

module.exports = router;
