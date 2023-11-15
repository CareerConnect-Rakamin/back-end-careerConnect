const companyControllers = require('./company.controllers');

const jobsControllers = require('./jobs.controllers');
const authController = require('./auth.controllers');

module.exports = {
  jobsControllers,
  authController,
  companyControllers
};
