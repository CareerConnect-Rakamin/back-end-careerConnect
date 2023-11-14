const { companiesRepositories } = require('../repositories');

async function getCompanies({ page }) {
  try {
    const result = await companiesRepositories.getCompanies({ page });
    return result;
  } catch (error) {
    throw new Error(`Error while getting companies: ${error.message}`);
  }
}

module.exports = { getCompanies };
