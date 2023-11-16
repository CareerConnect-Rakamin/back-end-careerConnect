const { companiesController } = require('../controllers');
const { authMiddlewares, uploadFileMiddleware } = require('../middlewares');
const { Router } = require('express');
const { validator } = require('../middlewares');

const router = Router();

const { validate, requirements } = validator;
router.use(authMiddlewares);
router.get('/', companiesController.getCompanies);
router.get(
  '/:id',
  [validate(requirements.getCompanyById)],
  companiesController.getCompanyById
);
router.put(
  '/:id',
  uploadFileMiddleware.single('file'),
  [validate(requirements.updateCompanyById)],
  companiesController.updateCompanyById
);

module.exports = router;
