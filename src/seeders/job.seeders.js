const { JobModel } = require('../models');

const jobs = [];

const createJob = (
  companies_id,
  name,
  description,
  location,
  category,
  job_type,
  salary,
  capacity,
  is_open
) => {
  try {
    const job = {
      companies_id,
      name,
      description,
      location,
      category,
      job_type,
      salary,
      capacity,
      is_open
    };
    jobs.push(job);
    console.info('Job created successfully.');
  } catch (error) {
    console.error('Error creating job:', error);
  }
};

createJob(
  2,
  'IT Support',
  'Work as IT Support',
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
    console.info('Job seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding job data:', error);
  }
};

module.exports = seedJobs;
