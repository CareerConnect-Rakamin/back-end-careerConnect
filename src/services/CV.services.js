const { CVRepo } = require('../repositories');

const UpdateCV = async (data) => {
  const { id, cv_path } = data;
  if (!id) {
    return Promise.reject(new Error('Invalid id...'));
  }
  const updateCV = CVRepo.UpdateCV({ id, cv_path });
  return updateCV;
};

const DeleteCV = async (data) => {
  const { id } = data;
  if (!id) {
    return Promise.reject(new Error('Invalid id...'));
  }
  const deleteCV = await CVRepo.DeleteCV({ id });
  return deleteCV;
};

module.exports = {
  UpdateCV,
  DeleteCV
};
