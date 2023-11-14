const { Router } = require('express');
const jobsRoutes = require('./jobs.routes');
const companiesRoute = require('./companies.routes');

const router = Router();

router.use('/jobs', jobsRoutes);
router.use('/companies', companiesRoute);

module.exports = router;

