const { CertificateModel, JobSeekerModel } = require('../models');
const fs = require('fs').promises;
const path = require('path');
const pathCertif = path;

const AddCeritificates = (params) => {
  return new Promise(async (resolve, reject) => {
    const { id, name, path } = params;
    try {
      const user = await JobSeekerModel.findByPk(id);
      const addCertificate = await CertificateModel.create({
        jobseekers_id: user.id,
        name: name,
        path: path
      });
      resolve(addCertificate);
    } catch (error) {
      reject(error);
    }
  });
};

const UpdateCertificates = (params) => {
  return new Promise(async (resolve, reject) => {
    const { id, name, path, oldPath } = params;
    try {
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
      resolve(updateCertificate);
    } catch (error) {
      reject(error);
    }
  });
};

const DeleteCertificates = (params) => {
  return new Promise(async (resolve, reject) => {
    const { id, oldPath } = params;
    try {
      const certifFolder = pathCertif.join(__dirname, `../../`);
      const certifPath = pathCertif.join(certifFolder, oldPath);
      await fs.unlink(certifPath);

      const deleteCertificate = await CertificateModel.destroy({
        where: {
          jobseekers_id: id,
          path: oldPath
        }
      });
      resolve(deleteCertificate);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  AddCeritificates,
  UpdateCertificates,
  DeleteCertificates
};
