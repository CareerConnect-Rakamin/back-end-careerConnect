const companiesController = require('./companies.controllers');
const jobsControllers = require('./jobs.controllers');
const authController = require('./auth.controllers');
const UserControllers = require('./user-profile.controllers');
const CVControllers = require('./CV.controllers');
const CertificatesControllers = require('./certificates.controllers');
const PhotoControllers = require('./photo-profile.controllers');

module.exports = {
  jobsControllers,
  authController,
  companiesController,
  UserControllers,
  CVControllers,
  CertificatesControllers,
  PhotoControllers
};
