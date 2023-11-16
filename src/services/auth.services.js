const { usersRepositories } = require('../repositories');
const { secretKey } = require('../config');
const { compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { addMinutes } = require('date-fns');

async function login({ email, password }) {
  const user = await usersRepositories.getUserByEmail(email);
  if (!user) {
    throw new Error(401);
  }

  const isPasswordCorrect = compareSync(password, user.dataValues.password);
  if (!isPasswordCorrect) {
    throw new Error(401);
  }

  const expiresIn = Math.floor(addMinutes(new Date(), 120).getTime() / 1000);
  const authUser = { id: user.dataValues.id, exp: expiresIn };
  const token = sign(authUser, secretKey);

  return {
    token
  };
}

module.exports = {
  login
};
