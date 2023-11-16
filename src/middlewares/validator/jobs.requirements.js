const { query, body, param } = require('express-validator');

const requirements = {
  getJobs: [query('page').isInt({ min: 1 }).optional({ nullable: true })],
  getJobByCompanyId: [param('compId').isInt({ min: 1 })],
  getJobById: [param('jobId').isInt({ min: 1 })],
  createJobs: [
    body('name').isString().isLength({ min: 3 }),
    body('description').isString().isLength({ min: 3 }),
    body('location').isString().isLength({ min: 3 }),
    body('category')
      .isString()
      .isIn([
        'Information',
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Sales',
        'Marketing',
        'Engineering',
        'Customer_Service',
        'Human_Resources'
      ]),
    body('job_type').isString().isIn(['WFH', 'WFO']),
    body('salary').isInt({ min: 1000 }).default(0).optional({ nullable: true }),
    body('capacity').isInt({ min: 1 }).default(0).optional({ nullable: true })
  ],
  updateJobs: [
    param('jobId').isInt({ min: 1 }),
    body('name').isString().isLength({ min: 3 }),
    body('description').isString().isLength({ min: 3 }),
    body('location').isString().isLength({ min: 3 }),
    body('category')
      .isString()
      .isIn([
        'Information',
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Sales',
        'Marketing',
        'Engineering',
        'Customer_Service',
        'Human_Resources'
      ]),
    body('job_type').isString().isIn(['WFH', 'WFO']),
    body('salary').isInt({ min: 1000 }).default(0).optional({ nullable: true }),
    body('capacity').isInt({ min: 1 }).default(0).optional({ nullable: true }),
    body('is_open').isBoolean().default(true).optional({ nullable: true })
  ],
  deleteJob: [param('jobId').isInt({ min: 1 })]
};

module.exports = requirements;