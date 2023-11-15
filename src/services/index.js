const companyServices = require('./company.services');

const jobsServices = require('./jobs.services');
const authService = require('./auth.services');

module.exports = {
  jobsServices,
  authService,
  companyServices
};
