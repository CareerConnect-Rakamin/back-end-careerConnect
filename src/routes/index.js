const { Router } = require('express');
const jobsRoutes = require('./jobs.routes');
const authRoute = require('./auth.routes');
const companiesRoutes = require('./companies.routes');

const router = Router();
router.use('/jobs', jobsRoutes);
router.use('/auth', authRoute);
router.use('/companies', companiesRoutes);

module.exports = router;
