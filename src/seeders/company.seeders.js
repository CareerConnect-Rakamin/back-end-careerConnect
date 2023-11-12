const { CompanyModel } = require('../models');

const companies = [];

const createCompany = (
  id,
  photo_profile,
  name,
  type,
  description,
  website,
  email,
  phone_number,
  address
) => {
  try {
    const company = {
      id,
      photo_profile,
      name,
      type,
      description,
      website,
      email,
      phone_number,
      address
    };
    companies.push(company);
    console.info('Company created successfully.');
  } catch (error) {
    console.error('Error creating company:', error);
  }
};

createCompany(
  2,
  'public/uploads/default/company.png',
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
  'public/uploads/default/company.png',
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
  'public/uploads/default/company.png',
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
    console.info('Company seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding company data:', error);
  }
};

module.exports = seedCompanies;