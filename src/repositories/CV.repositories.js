const { JobSeekerModel } = require('../models');
const fs = require('fs').promises;
const path = require('path');

const UpdateCV = async (params) => {
  const { id, cv_path } = params;
  const updateCV = await JobSeekerModel.update(
    {
      cv_path: cv_path
    },
    {
      where: {
        jobseekers_id: id
      }
    }
  );
  return updateCV;
};

const DeleteCV = async (params) => {
  const { id } = params;
  const user = await JobSeekerModel.findByPk(id);
  const cvName = user.cv_path;

  const cvFolder = path.join(__dirname, `../../`);
  const cvPath = path.join(cvFolder, cvName);
  await fs.unlink(cvPath);

  const deleteCV = await JobSeekerModel.update(
    { cv_path: null },
    {
      where: {
        id: id
      }
    }
  );
  return deleteCV;
};

module.exports = {
  UpdateCV,
  DeleteCV
};
