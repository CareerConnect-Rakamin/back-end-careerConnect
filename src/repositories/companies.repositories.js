const { CompanyModel } = require('../models');

async function getCompanies({ page }) {
  try {
    const companies = await CompanyModel.findAll({
      offset: (page - 1) * 9,
      limit: 9
    });
    return companies;
  } catch (error) {
    throw new Error(`Error while fetching companies: ${error.message}`);
  }
}

module.exports = { getCompanies };
