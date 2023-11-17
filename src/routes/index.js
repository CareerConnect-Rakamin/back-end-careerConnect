const { Router } = require('express');
const jobsRoutes = require('./jobs.routes');
const authRoute = require('./auth.routes');
const companiesRoutes = require('./companies.routes');
const ProfileRoutes = require('./user-profile.routes');
const CVRoutes = require('./CV.routes');
const CertificatesRoutes = require('./certificates.routes');
const PhotoRoutes = require('./photo-profile.routes');

const router = Router();
router.use('/jobs', jobsRoutes);
router.use('/auth', authRoute);
router.use('/companies', companiesRoutes);
router.use('/', ProfileRoutes);
router.use('/', CVRoutes);
router.use('/', CertificatesRoutes);
router.use('/', PhotoRoutes);

module.exports = router;
