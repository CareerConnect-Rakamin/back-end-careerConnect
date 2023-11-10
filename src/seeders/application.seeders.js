const { ApplicationModel } = require('../models');

const applications = [];

const createApplication = (jobseekers_id, jobs_id, status) => {
  try {
    const application = { jobseekers_id, jobs_id, status };
    applications.push(application);
    console.info('Application created successfully.');
  } catch (error) {
    console.error('Error creating application:', error);
  }
};

createApplication(1, 1, 'pending');
createApplication(3, 1, 'pending');
createApplication(3, 2, 'pending');

const seedApplications = async () => {
  try {
    await ApplicationModel.bulkCreate(applications);
    console.info('Application seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding application data:', error);
  }
};

module.exports = seedApplications;
