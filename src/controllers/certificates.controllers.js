const { CertificatesService } = require('../services');

const AddCeritificates = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const fileDirr = req.file.path;
  const fileName = req.file.filename;
  try {
    const file = `public/uploads/${id}/certificates/${fileName}`;
    const result = await CertificatesService.AddCeritificates({
      id,
      name,
      path: file
    });
    res.status(200).json({ message: 'certificates uploaded successfully...', data : result });
  } catch (error) {
    res.status(500).send({ message: 'internal server error...', error });
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
    res.status(200).json({ message: 'certificates updated successfully...', data : result });
  } catch (error) {
    res.status(500).send({ message: 'internal server error...', error });
  }
};

const DeleteCertificates = async (req, res) => {
  const id = req.params.id;
  const oldPath = req.params.oldPath;
  try {
    const oldfile = `public/uploads/${id}/certificates/${oldPath}`;
    const result = await CertificatesService.DeleteCertificates({
      id,
      oldPath: oldfile
    });
    if (result) {
      res.status(200).json({ message: 'Certificates deleted successfully...' });
    }
  } catch (error) {
    res.status(500).send({ message: 'internal server error...', error });
  }
};

module.exports = {
  AddCeritificates,
  UpdateCertificates,
  DeleteCertificates
};
