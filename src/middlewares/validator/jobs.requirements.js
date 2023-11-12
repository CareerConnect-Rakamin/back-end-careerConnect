const { query } = require('express-validator');

const requirements = {
  getJobs: [
    query('page').isInt({ min: 1 }).optional({ nullable: true }),
    query('limit').isInt({ min: 4, max: 12 }).optional({ nullable: true })
  ]
};

module.exports = requirements;
