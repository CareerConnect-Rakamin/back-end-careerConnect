const { CompanyModel } = require('../models');

async function getCompanyById(id) {
  return CompanyModel.findByPk(id);
}

module.exports = {
  getCompanyById
};
