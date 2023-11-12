const { companyRepositories } = require('../repositories');
const ResponseError = require('../utils/response.error.js');
const path = require('path');
const fs = require('fs');

const getCompanyById = async (id) => {
  if (isNaN(Number(id))) {
    const err = new ResponseError(400, 'Id must be a number');
    throw err;
  }
  const result = await companyRepositories.getCompanyById(id);

  if (!result) {
    const err = new ResponseError(404, 'Company not found');
    throw err;
  }
  return result;
};

const updateCompanyById = async (params, body, file) => {
  const { filename: photo_profile } = file;
  const { id } = params;

  const { name, type, description, website, email, phone_number, address } =
    body;

  const cekId = await companyRepositories.getCompanyById(id);

  if (!cekId) {
    const err = new ResponseError(404, 'Company not found');
    throw err;
  }

  const data = await companyRepositories.updateCompnyById(id, {
    photo_profile,
    name,
    type,
    description,
    website,
    email,
    phone_number,
    address
  });

  if (!data) {
    const err = new ResponseError(500, 'Internal server error');
    throw err;
  }

  // mencari path photo lama
  const filePath = path.join(
    __dirname,
    '../../public/uploads/photo_profile',
    data.oldPhoto
  );

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
      // jika foto lama ada, hapus
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting old photo:', err);
          throw (err = new ResponseError(500, 'Internal server error'));
        }
      });
    }
  });
  return data.result;
};
module.exports = { getCompanyById, updateCompanyById };
