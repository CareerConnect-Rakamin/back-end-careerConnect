const companiesServices = require('./companies.services');
const jobsServices = require('./jobs.services');
const authService = require('./auth.services');
const usersService = require('./users.services');

module.exports = {
  jobsServices,
  authService,
  usersService,
  companiesServices
};
