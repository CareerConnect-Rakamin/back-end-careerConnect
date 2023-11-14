const { companiesServices } = require('../services');

async function getCompaniesController(req, res) {
  try {
    const result = await companiesServices.getCompanies({
      page: req.query.page || 1
    });
    res.json({
      status: 'Success',
      data: result
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getCompaniesController };
