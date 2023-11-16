const { JobSeekerModel } = require('../models');

const UpdatePhoto = (params) => {
  return new Promise(async (resolve, reject) => {
    const { id, photo_profile } = params;
    try {
      const uploadPhoto = await JobSeekerModel.update(
        {
          photo_profile: photo_profile
        },
        {
          where: {
            id: id
          }
        }
      );
      resolve(uploadPhoto);
    } catch (error) {
      reject(error);
    }
  });
};

const DeletePhoto = (params) => {
  return new Promise(async (resolve, reject) => {
    const id = params;
    let fileName = '';
    const findData = await JobSeekerModel.findByPk(id);
    try {
      if (findData.gender === 'M') {
        fileName = 'public/uploads/default/man.png';
      } else if (findData.gender === 'F') {
        fileName = 'public/uploads/default/woman.png';
      }
      const deletePhoto = await JobSeekerModel.update(
        {
          photo_profile: fileName
        },
        {
          where: { id: id }
        }
      );
      resolve(deletePhoto);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  UpdatePhoto,
  DeletePhoto
};
