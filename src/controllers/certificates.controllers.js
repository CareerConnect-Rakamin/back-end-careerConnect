const { CertificatesService } = require('../services');
const logger = require('../utils/logger');

const AddCeritificates = async (req, res) => {
  const id = req.userdata.id;
  const name = req.body.name;
  const fileDirr = req.file.path;
  const fileName = req.file.filename;
  try {
    const file = `jobseekers/certificates/${id}/${fileName}`;
    await CertificatesService.AddCeritificates(id, {
      name,
      path: file
    });
    res.status(200).json({
      status: 'Success',
      message: 'Certificates uploaded successfully'
    });
  } catch (error) {
    if (error.message == 'Not Found') {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error(error);
    res
      .status(500)
      .send({ status: 'failed', message: 'internal server error' });
  }
};

const UpdateCertificates = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const oldPath = req.params.oldPath;
  const fileDirr = req.file.path;
  const fileName = req.file.filename;
  try {
    const file = `public/uploads/${id}/certificates/${fileName}`;
    const oldfile = `public/uploads/${id}/certificates/${oldPath}`;
    const result = await CertificatesService.UpdateCertificates({
      id,
      name,
      path: file,
      oldPath: oldfile
    });
    res
      .status(200)
      .json({ message: 'certificates updated successfully...', data: result });
  } catch (error) {
    res.status(500).send({ message: 'internal server error...', error });
  }
};

const DeleteCertificates = async (req, res) => {
  const id = req.params.id;
  const userId = req.userdata.id;
  try {
    await CertificatesService.DeleteCertificates(id, userId);
    res.status(200).json({
      status: 'Success',
      message: 'Certificates deleted successfully'
    });
  } catch (error) {
    if (error.message == 404) {
      return res.status(404).json({
        status: 'failed',
        message: 'Not found'
      });
    }
    logger.error(error.message);
    res
      .status(500)
      .send({ status: 'failed', message: 'internal server error' });
  }
};

module.exports = {
  AddCeritificates,
  UpdateCertificates,
  DeleteCertificates
};
