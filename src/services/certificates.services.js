const { CertificatesRepo } = require('../repositories');

const AddCeritificates = async (data) => {
  const { id, name, path } = data;
  if (!id) {
    return Promise.reject(new Error('Invalid id...'));
  } else if (!name && !path) {
    return Promise.reject(new Error('Some value null...'));
  }
  const addCertificate = await CertificatesRepo.AddCeritificates({
    id,
    name,
    path
  });
  return addCertificate;
};

const UpdateCertificates = async (data) => {
  const { id, name, path, oldPath } = data;
  if (!id) {
    return Promise.reject(new Error('Invalid id...'));
  }
  const updateCertificate = CertificatesRepo.UpdateCertificates({
    id,
    name,
    path,
    oldPath
  });
  return updateCertificate;
};

const DeleteCertificates = async (data) => {
  const { id, oldPath } = data;
  if (!id) {
    return Promise.reject(new Error('Invalid id...'));
  }
  const deleteCertificates = await CertificatesRepo.DeleteCertificates({
    id,
    oldPath
  });
  return deleteCertificates;
};

module.exports = {
  AddCeritificates,
  UpdateCertificates,
  DeleteCertificates
};
