const { companiesServices } = require('../services');
const logger = require('../utils/logger');

async function getCompanies(req, res) {
  try {
    const result = await companiesServices.getCompanies({
      page: req.query.page || 1
    });
    res.json({
      status: 'Success',
      data: result
    });
  } catch (error) {
    logger.error({ status: 500, error: error.message });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

const getCompanyById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await companiesServices.getCompanyById(id);
    res.json({
      status: 'Success',
      data: result
    });
  } catch (err) {
    logger.error({ status: err.status, error: err.message });
    res.status(err.status).json({
      status: 'failed',
      message: err.message
    });
  }
};

const updateCompanyById = async (req, res) => {
  const id = req.userdata.id;
  try {
    const result = await companiesServices.updateCompanyById(id, req.body);
    res.status(200).json({
      status: 'Success',
      message: 'Data Profile successfully updated'
    });
  } catch (err) {
    if (err.status) {
      res.status(err.status).json({ status: 'failed', message: err.message });
    }
    logger.error(err);
    res
      .status(err.status)
      .json({ status: 'failed', message: 'Internal server error' });
  }
};

module.exports = {
  getCompanies,
  getCompanyById,
  updateCompanyById
};
