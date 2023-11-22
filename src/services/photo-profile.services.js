const { PhotoRepo } = require('../repositories');

const UpdatePhoto = async (data) => {
  const { id, photo_profile } = data;
  if (!id && !photo_profile) {
    throw new Error('Some value null');
  }
  const upload = await PhotoRepo.UpdatePhoto({ id, photo_profile });
  return upload;
};

const DeletePhoto = async (id) => {
  if (!id) {
    return Promise.reject(new Error('Id null'));
  }
  const deletePhoto = await PhotoRepo.DeletePhoto(id);
  return deletePhoto;
};

module.exports = {
  UpdatePhoto,
  DeletePhoto
};
