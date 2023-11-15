const { RequirementModel } = require('../models');
const logger = require('../utils/logger');

const requirements = [];

const createRequirement = (jobs_id, what_will_you_do, what_will_you_need) => {
  const requirement = { jobs_id, what_will_you_do, what_will_you_need };
  requirements.push(requirement);
};

createRequirement(
  1,
  'Provide IT support to staff and customers',
  'Experience in IT support, good communication skills'
);
createRequirement(
  1,
  'Troubleshoot hardware and software issues',
  'Experience with hardware and software troubleshooting'
);
createRequirement(
  1,
  'Maintain IT infrastructure',
  'Experience in IT infrastructure maintenance'
);

createRequirement(
  2,
  'Manage recruitment and hiring process',
  'Experience in recruitment, good communication skills'
);
createRequirement(
  2,
  'Handle employee relations and disputes',
  'Experience in conflict resolution, good interpersonal skills'
);
createRequirement(
  2,
  'Develop and implement HR policies',
  'Experience in policy development, good organizational skills'
);

const seedRequirements = async () => {
  try {
    await RequirementModel.bulkCreate(requirements);
    logger.info('Requirement seed data inserted successfully.');
  } catch (error) {
    logger.error('Error seeding requirement data:', error);
  }
};

module.exports = seedRequirements;
