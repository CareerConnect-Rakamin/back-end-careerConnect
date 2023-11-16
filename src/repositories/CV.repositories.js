const { JobSeekerModel } = require('../models');
const fs = require('fs').promises;
const path = require('path');

const UpdateCV = (params) => {
  return new Promise(async (resolve, reject) => {
    const { id, cv_path } = params;
    try {
      const updateCV = await JobSeekerModel.update(
        {
          cv_path: cv_path
        },
        {
          where: {
            id: id
          }
        }
      );
      resolve(updateCV);
    } catch (error) {
      reject(error);
    }
  });
};

const DeleteCV = (params) => {
  return new Promise(async (resolve, reject) => {
    const { id } = params;
    try {
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
      resolve(deleteCV);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  UpdateCV,
  DeleteCV
};
