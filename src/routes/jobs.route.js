const { Router } = require('express');
const { jobsController } = require('../controllers');
const { validator } = require('../middlewares');

const router = Router();
const { validate, requirements } = validator;

router.route('/').get([validate(requirements.getJobs)], jobsController.getJobs);

module.exports = router;
