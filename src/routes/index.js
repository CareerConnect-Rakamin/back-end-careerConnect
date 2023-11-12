const { Router } = require('express');
const jobsRoute = require('./jobs.route');

const router = Router();

router.use('/jobs', jobsRoute);

module.exports = router;
