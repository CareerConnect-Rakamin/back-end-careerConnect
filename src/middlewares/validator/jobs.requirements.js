const { query, body, param } = require('express-validator');

const requirements = {
  getJobs: [
    query('page').isInt({ min: 1 }).optional({ nullable: true }),
    query('keyword').isString().optional({ nullable: true })
  ],
  getJobByCompanyId: [param('compId').isInt({ min: 1 })],
  getJobById: [param('jobId').isInt({ min: 1 })],
  createJobs: [
    body('name').isString().isLength({ min: 3 }),
    body('description').isString().isLength({ min: 3 }),
    body('what_will_you_do').isString(),
    body('what_will_you_need').isString(),
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
    body('name').isString().isLength({ min: 3 }).optional({ nullable: true }),
    body('description')
      .isString()
      .isLength({ min: 3 })
      .optional({ nullable: true }),
    body('what_will_you_do').isString().optional({ nullable: true }),
    body('what_will_you_need').isString().optional({ nullable: true }),
    body('location')
      .isString()
      .isLength({ min: 3 })
      .optional({ nullable: true }),
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
      ])
      .optional({ nullable: true }),
    body('job_type')
      .isString()
      .isIn(['WFH', 'WFO'])
      .optional({ nullable: true }),
    body('salary').isInt({ min: 1000 }).default(0).optional({ nullable: true }),
    body('capacity').isInt({ min: 1 }).default(0).optional({ nullable: true }),
    body('is_open').isBoolean().default(true).optional({ nullable: true })
  ],
  deleteJob: [param('jobId').isInt({ min: 1 })],

  createRequirements: [
    param('jobId').isInt({ min: 1 }),
    body('what_will_you_do').isString(),
    body('what_will_you_need').isString()
  ]
};

module.exports = requirements;
