const { PhotoRepo } = require('../repositories');

const UpdatePhoto = async (data) => {
  const { id, photo_profile } = data;
  if (!id && !photo_profile) {
    throw new Error('Some value null');
  }
  const upload = await PhotoRepo.UpdatePhoto({ id, photo_profile });
  return upload;
};

module.exports = {
  UpdatePhoto
};
