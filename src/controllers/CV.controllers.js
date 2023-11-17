const { CVService } = require('../services');

const UpdateCV = async (req, res) => {
  const id = req.params.id;
  const fileDir = req.file.path;
  const fileName = req.file.filename;
  try {
    const file = `public/uploads/${id}/${fileName}`;
    const result = await CVService.UpdateCV({ id, cv_path: file });
    if (result) {
      res.status(200).json({ message: 'CV Uploaded successfully...', data : result });
    }
  } catch (error) {
    res.status(500).send({ message: 'internal server error...', error });
  }
};

const DeleteCV = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await CVService.DeleteCV({ id });
    if (result) {
      res.status(200).json({ message: 'CV deleted successfully...' });
    }
  } catch (error) {
    res.status(500).send({ message: 'internal server error...', error });
  }
};

module.exports = {
  UpdateCV,
  DeleteCV
};
