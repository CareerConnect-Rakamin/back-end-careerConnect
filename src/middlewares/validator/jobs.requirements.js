const { query } = require('express-validator');

const requirements = {
  getJobs: [query('page').isInt({ min: 1 }).optional({ nullable: true })]
};

module.exports = requirements;
