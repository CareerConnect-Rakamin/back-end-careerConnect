const { PhotoService } = require('../services');

const UploadPhoto = async (req, res) => {
  const id = req.params.id;
  const fileDirr = req.file.path;
  const fileName = req.file.filename;
  try {
    const file = `public/uploads/${id}/${fileName}`;
    const result = await PhotoService.UpdatePhoto({ id, photo_profile: file });
    if (result) {
      res.status(200).json({ message: 'Photo Uploaded successfully...', data : result });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const DeletePhoto = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await PhotoService.DeletePhoto(id);
    if (result) {
      res
        .status(200)
        .json({ message: 'Photo Deleted successfully...', data : result });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  UploadPhoto,
  DeletePhoto
};
