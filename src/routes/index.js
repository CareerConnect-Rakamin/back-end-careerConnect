const { Router } = require('express');
const jobsRoutes = require('./jobs.routes');
const authRoute = require('./auth.routes');

const router = Router();

router.use('/jobs', jobsRoutes);
router.use('/auth', authRoute);

module.exports = router;
