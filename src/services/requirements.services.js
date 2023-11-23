const { requirementsRepositories } = require('../repositories');

const getRequirementsByJobsId = async (id) => {
  const result = await requirementsRepositories.getRequirementsByJobsId(id);
  if (!result) {
    throw new Error(404);
  }
  return result;
};
