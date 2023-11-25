const { companiesRepositories, usersRepositories } = require('../repositories');
const ResponseError = require('../utils/response.error.js');
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const { error } = require('console');
const logger = require('../utils/logger.js');

const getCompanyById = async (id) => {
  if (isNaN(Number(id))) {
    const err = new ResponseError(400, 'Id must be a number');
    throw err;
  }
  const result = await companiesRepositories.getCompanyById(id);

  if (!result) {
    const err = new ResponseError(404, 'Not found');
    throw err;
  }
  return result;
};

const updateCompanyById = async (id, data) => {
  const company = await companiesRepositories.getCompanyById(id);

  const { email } = data;
  if (email) {
    const emailExist = await usersRepositories.getUserByEmail(email);
    if (emailExist) {
      throw new Error('Email already exist');
    }
  }

  await companiesRepositories.updateCompanyById(id, data);
};

async function getCompanies({ page }) {
  try {
    const result = await companiesRepositories.getCompanies({ page });
    return result;
  } catch (error) {
    throw new Error(`Error while getting companies: ${error.message}`);
  }
}

module.exports = {
  getCompanies,
  getCompanyById,
  updateCompanyById
};
