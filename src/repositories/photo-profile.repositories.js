const { JobSeekerModel } = require('../models');

const UpdatePhoto = async (params) => {
  const { id, photo_profile } = params;
  const uploadPhoto = await JobSeekerModel.update(
    {
      photo_profile: photo_profile
    },
    {
      where: {
        jobseekers_id: id
      }
    }
  );
  return uploadPhoto;
};

const DeletePhoto = async (params) => {
  const id = params;
  let fileName = '';
  const findData = await JobSeekerModel.findByPk(id);
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
  return deletePhoto;
};

module.exports = {
  UpdatePhoto,
  DeletePhoto
};
