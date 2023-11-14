const { Router } = require('express');
const { jobsControllers } = require('../controllers');
const { validator } = require('../middlewares');

const router = Router();
const { validate, requirements } = validator;

router
  .route('/')
  .get([validate(requirements.getJobs)], jobsControllers.getJobs);

module.exports = router;
