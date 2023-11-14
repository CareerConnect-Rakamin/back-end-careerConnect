const { Router } = require('express');
const jobsRoutes = require('./jobs.routes');

const router = Router();

router.use('/jobs', jobsRoutes);

module.exports = router;
