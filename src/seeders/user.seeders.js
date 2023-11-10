const bcrypt = require('bcrypt');
const { UserModel } = require('../models');

const users = [];

const createUser = (email, password, role) => {
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = { email, password: hashedPassword, role };
    users.push(user);
    console.info('User created successfully.');
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

for (let i = 0; i < 3; i++) {
  createUser(`jobseeker${i}@gmail.com`, `password${i}`, 'jobseeker');
  createUser(`company${i}@company.com`, `password${i}`, 'company');
}

const seedUsers = async () => {
  try {
    await UserModel.bulkCreate(users);
    console.info('User seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding user data:', error);
  }
};

module.exports = seedUsers;
