const { Router } = require('express');
const companyRoutes = require('./company.routes');
const jobsRoutes = require('./jobs.routes');
const authRoute = require('./auth.routes');

const router = Router();
router.use('/company', companyRoutes);
router.use('/jobs', jobsRoutes);
router.use('/auth', authRoute);

module.exports = router;
