const { JobModel } = require('../models');
const logger = require('../utils/logger');

const jobs = [];

const createJob = (
  companies_id,
  name,
  description,
  what_will_you_do,
  what_will_you_need,
  location,
  category,
  job_type,
  salary,
  capacity,
  is_open
) => {
  const job = {
    companies_id,
    name,
    description,
    what_will_you_do,
    what_will_you_need,
    location,
    category,
    job_type,
    salary,
    capacity,
    is_open
  };
  jobs.push(job);
};

createJob(
  2,
  'IT Support',
  'Work as IT Support',
  '- Provide IT support to staff and customers\n- Troubleshoot hardware and software issues\n- Maintain IT infrastructure',
  '- Experience in IT support, good communication skills\n- Experience with hardware and software troubleshooting\n- Experience in IT infrastructure maintenance',
  'Jakarta, Wakanda',
  'Technology',
  'WFH',
  3000000,
  10,
  true
);
createJob(
  4,
  'Human Resouces',
  'Work as Human Resouces',
  '- Manage recruitment and hiring process\n- Handle employee relations and disputes\n- Develop and implement HR policies',
  '- Experience in recruitment, good communication skills\n- Experience in conflict resolution, good interpersonal skills\n- Experience in policy development, good organizational skills',
  'Surabaya, Wakanda',
  'Human_Resources',
  'WFO',
  2500000,
  5,
  true
);

const seedJobs = async () => {
  try {
    await JobModel.bulkCreate(jobs);
    logger.info('Job seed data inserted successfully.');
  } catch (error) {
    logger.error('Error seeding job data:', error);
  }
};

module.exports = seedJobs;
