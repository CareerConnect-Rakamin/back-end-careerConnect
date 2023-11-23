const { CompanyModel } = require('../models');
const logger = require('../utils/logger');

const companies = [];

const createCompany = (
  companies_id,
  photo_profile,
  name,
  type,
  description,
  website,
  email_company,
  phone_number,
  address
) => {
  const company = {
    companies_id,
    photo_profile,
    name,
    type,
    description,
    website,
    email_company,
    phone_number,
    address
  };
  companies.push(company);
};

createCompany(
  2,
  'photo/default/company.png',
  'TechCompany',
  'Technology',
  'This is our TechCompany',
  'www.techcompany.com',
  'techcompany@gmail.com',
  '+62852123456789',
  'Jakarta, Wakanda'
);
createCompany(
  4,
  'photo/default/company.png',
  'HealthCare',
  'Healthcare',
  'This is our HealthCare Company',
  'www.healthcompany.com',
  'healthcompany@gmail.com',
  '+62852123423789',
  'Surabaya, Wakanda'
);
createCompany(
  6,
  'photo/default/company.png',
  'MakinPaper',
  'Manufacturing',
  'This is our Making Paper Company',
  'www.papercompany.com',
  'papercompany@gmail.com',
  '+62852124456789',
  'Bandung, Wakanda'
);

const seedCompanies = async () => {
  try {
    await CompanyModel.bulkCreate(companies);
    logger.info('Company seed data inserted successfully.');
  } catch (error) {
    logger.error('Error seeding company data:', error);
  }
};

module.exports = seedCompanies;
