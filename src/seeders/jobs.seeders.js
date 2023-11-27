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
  6,
  'Renewable Energy Engineer',
  'Work as a Renewable Energy Engineer at EcoEnergy',
  '- Design and test renewable energy systems\n- Conduct energy audits\n- Develop energy conservation plans',
  '- Degree in Engineering, good communication skills\n- Experience with renewable energy systems\n- Knowledge of energy conservation techniques',
  'Medan, Indonesia',
  'Energy',
  'WFH',
  5000000,
  5,
  true
);
createJob(
  7,
  'Food Scientist',
  'Work as a Food Scientist at FoodieFiesta',
  '- Develop new food products\n- Ensure food safety and quality\n- Conduct sensory evaluations',
  '- Degree in Food Science, good communication skills\n- Experience in food product development\n- Knowledge of food safety and quality standards',
  'Semarang, Indonesia',
  'Food',
  'WFO',
  4500000,
  4,
  true
);
createJob(
  8,
  'Automotive Engineer',
  'Work as an Automotive Engineer at AutoMoto',
  '- Design and develop automotive systems\n- Conduct performance tests\n- Troubleshoot mechanical issues',
  '- Degree in Engineering, good communication skills\n- Experience in automotive systems design\n- Knowledge of performance testing techniques',
  'Palembang, Indonesia',
  'Automotive',
  'WFH',
  5500000,
  6,
  true
);
createJob(
  9,
  'Fashion Designer',
  'Work as a Fashion Designer at FashionForward',
  '- Design new fashion collections\n- Select appropriate fabrics\n- Follow fashion trends',
  '- Degree in Fashion Design, good communication skills\n- Experience in fashion design\n- Knowledge of current fashion trends',
  'Makassar, Indonesia',
  'Fashion',
  'WFO',
  4000000,
  3,
  true
);
createJob(
  10,
  'Construction Manager',
  'Work as a Construction Manager at BuildBetter',
  '- Plan and oversee construction projects\n- Ensure projects are completed on time and within budget\n- Ensure compliance with safety regulations',
  '- Degree in Construction Management, good communication skills\n- Experience in managing construction projects\n- Knowledge of safety regulations and standards',
  'Denpasar, Indonesia',
  'Construction',
  'WFH',
  6000000,
  7,
  true
);

createJob(
  6,
  'Solar Power Engineer',
  'Work as a Solar Power Engineer at EcoEnergy',
  '- Design and develop solar power systems\n- Conduct energy audits\n- Develop energy conservation plans',
  '- Degree in Engineering, good communication skills\n- Experience with renewable energy systems, particularly solar\n- Knowledge of energy conservation techniques',
  'Medan, Indonesia',
  'Energy',
  'WFH',
  7000000,
  4,
  true
);
createJob(
  7,
  'Food Quality Inspector',
  'Work as a Food Quality Inspector at FoodieFiesta',
  '- Inspect food products for quality\n- Ensure compliance with food safety standards\n- Prepare reports on food quality',
  '- Degree in Food Science or related field, good communication skills\n- Experience in food quality inspection\n- Knowledge of food safety standards',
  'Semarang, Indonesia',
  'Food',
  'WFO',
  6500000,
  3,
  true
);
createJob(
  8,
  'Automotive Technician',
  'Work as an Automotive Technician at AutoMoto',
  '- Perform maintenance and repair on vehicles\n- Diagnose mechanical issues\n- Ensure compliance with safety regulations',
  '- Certification in Automotive Service, good communication skills\n- Experience in automotive repair and maintenance\n- Knowledge of automotive systems and safety regulations',
  'Palembang, Indonesia',
  'Automotive',
  'WFH',
  5500000,
  6,
  true
);
createJob(
  9,
  'Fashion Consultant',
  'Work as a Fashion Consultant at FashionForward',
  '- Provide fashion advice to clients\n- Keep up with the latest fashion trends\n- Assist in creating outfits for clients',
  '- Degree in Fashion Design or related field, good communication skills\n- Experience in fashion consulting\n- Knowledge of current fashion trends',
  'Makassar, Indonesia',
  'Fashion',
  'WFO',
  4000000,
  3,
  true
);
createJob(
  10,
  'Construction Supervisor',
  'Work as a Construction Supervisor at BuildBetter',
  '- Supervise construction projects\n- Ensure projects are completed on time and within budget\n- Ensure compliance with safety regulations',
  '- Degree in Construction Management, good communication skills\n- Experience in supervising construction projects\n- Knowledge of safety regulations and standards',
  'Denpasar, Indonesia',
  'Construction',
  'WFH',
  6000000,
  7,
  true
);

createJob(
  6,
  'Wind Power Consultant',
  'Work as a Wind Power Consultant at EcoEnergy',
  '- Advise on wind power projects\n- Conduct energy audits\n- Develop energy conservation plans',
  '- Degree in Engineering, good communication skills\n- Experience with renewable energy systems, particularly wind\n- Knowledge of energy conservation techniques',
  'Medan, Indonesia',
  'Energy',
  'WFH',
  7000000,
  4,
  true
);
createJob(
  7,
  'Food Safety Officer',
  'Work as a Food Safety Officer at FoodieFiesta',
  '- Ensure compliance with food safety standards\n- Inspect food products for quality\n- Prepare reports on food safety',
  '- Degree in Food Science or related field, good communication skills\n- Experience in food safety inspection\n- Knowledge of food safety standards',
  'Semarang, Indonesia',
  'Food',
  'WFO',
  6500000,
  3,
  true
);
createJob(
  8,
  'Automotive Sales Manager',
  'Work as an Automotive Sales Manager at AutoMoto',
  '- Manage automotive sales team\n- Set sales goals and strategies\n- Ensure customer satisfaction',
  '- Degree in Business or related field, good communication skills\n- Experience in automotive sales\n- Knowledge of customer service principles',
  'Palembang, Indonesia',
  'Automotive',
  'WFH',
  5500000,
  6,
  true
);
createJob(
  9,
  'Fashion Marketing Specialist',
  'Work as a Fashion Marketing Specialist at FashionForward',
  '- Develop marketing strategies for fashion collections\n- Conduct market research\n- Organize fashion events',
  '- Degree in Marketing or related field, good communication skills\n- Experience in fashion marketing\n- Knowledge of current fashion trends',
  'Makassar, Indonesia',
  'Fashion',
  'WFO',
  4000000,
  3,
  true
);
createJob(
  10,
  'Construction Safety Officer',
  'Work as a Construction Safety Officer at BuildBetter',
  '- Ensure compliance with safety regulations on construction sites\n- Conduct safety inspections\n- Train construction workers on safety procedures',
  '- Certification in Occupational Health and Safety, good communication skills\n- Experience in construction safety\n- Knowledge of safety regulations and standards',
  'Denpasar, Indonesia',
  'Construction',
  'WFH',
  6000000,
  7,
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
