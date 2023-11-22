const { CertificateModel, JobSeekerModel } = require('../models');
const fs = require('fs').promises;
const path = require('path');
const pathCertif = path;

const getCertificateById = async (id, userId) => {
  const data = CertificateModel.findOne({
    where: {
      id: id,
      jobseekers_id: userId
    }
  });
  return data;
};

const AddCeritificates = async (id, params) => {
  const { name, path } = params;
  await CertificateModel.create({
    jobseekers_id: id,
    name: name,
    path: path
  });
};

const UpdateCertificates = async (params) => {
  const { id, name, path, oldPath } = params;
  const user = await JobSeekerModel.findByPk(id);
  const companyData = await CertificateModel.findOne({
    where: {
      jobseekers_id: user.id,
      path: oldPath
    }
  });

  const certifFolder = pathCertif.join(__dirname, `../../`);
  const certifPath = pathCertif.join(certifFolder, companyData.path);
  await fs.unlink(certifPath);

  const updateCertificate = await CertificateModel.update(
    {
      name: name,
      path: path
    },
    {
      where: { jobseekers_id: id, path: oldPath }
    }
  );
  return updateCertificate;
};

const DeleteCertificates = async (id, userId) => {
  await CertificateModel.destroy({
    where: {
      id: id,
      jobseekers_id: userId
    }
  });
};

module.exports = {
  getCertificateById,
  AddCeritificates,
  UpdateCertificates,
  DeleteCertificates
};
