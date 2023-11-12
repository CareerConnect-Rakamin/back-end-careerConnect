const { JobModel } = require('../models');

async function getJobs({ page, limit }) {
  const offset = (page - 1) * limit;
  return JobModel.findAll({
    offset,
    limit
  });
}

module.exports = { getJobs };
