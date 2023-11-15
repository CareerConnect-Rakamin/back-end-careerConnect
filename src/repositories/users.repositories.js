const { UserModel } = require('../models');

async function getUserByEmail(email) {
  return UserModel.findOne({
    where: {
      email: email
    }
  });
}

module.exports = {
  getUserByEmail
};
