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

module.exports = {
  UpdatePhoto
};
