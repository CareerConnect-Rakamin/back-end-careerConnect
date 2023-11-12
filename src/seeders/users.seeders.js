const bcrypt = require('bcrypt');
const { UserModel } = require('../models');
const logger = require('../utils/logger');

const users = [];

const createUser = (email, password, role) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = { email, password: hashedPassword, role };
  users.push(user);
};

for (let i = 0; i < 3; i++) {
  createUser(`jobseeker${i}@gmail.com`, `password${i}`, 'jobseeker');
  createUser(`company${i}@company.com`, `password${i}`, 'company');
}

const seedUsers = async () => {
  try {
    await UserModel.bulkCreate(users);
    logger.info('User seed data inserted successfully.');
  } catch (error) {
    logger.error('Error seeding user data:', error);
  }
};

module.exports = seedUsers;
