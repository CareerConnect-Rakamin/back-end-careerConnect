const { JobModel } = require('../models');

async function getJobs({ page }) {
  const offset = (page - 1) * 12;
  return JobModel.findAll({
    offset,
    limit: 12
  });
}

module.exports = { getJobs };
