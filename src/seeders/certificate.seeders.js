const { CertificateModel } = require('../models');

const certificates = [];

const createCertificate = (jobseekers_id, name, path) => {
  try {
    const certificate = { jobseekers_id, name, path };
    certificates.push(certificate);
    console.info('Certificate created successfully.');
  } catch (error) {
    console.error('Error creating certificate:', error);
  }
};

createCertificate(1, `Certificate For Me`, `public/uploads/1/certificate1.pdf`);
createCertificate(
  1,
  `Certificate For Me Again`,
  `public/uploads/1/certificate2.pdf`
);
createCertificate(
  3,
  `Still Certificate For Me`,
  `public/uploads/3/certificate1.pdf`
);

const seedCertificates = async () => {
  try {
    await CertificateModel.bulkCreate(certificates);
    console.info('Certificate seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding certificate data:', error);
  }
};

module.exports = seedCertificates;
