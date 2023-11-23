const { JobModel } = require('../models');

const getRequirementsByJobsId = async (id) => {
  const result = await JobModel.findAll({
    where: {
      jobs_id: id
    }
  });
  return result;
};

module.exports = {
  getRequirementsByJobsId
};
