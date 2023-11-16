const { CompanyModel } = require('../models');

const getCompanyById = async (id) => {
  const result = await CompanyModel.findByPk(id);
  return result;
};

const updateCompnyById = async (
  id,
  {
    photo_profile,
    name,
    type,
    description,
    website,
    email,
    phone_number,
    address
  }
) => {
  const getOldPhoto = await await CompanyModel.findByPk(id);

  const oldPhoto = getOldPhoto.photo_profile;

  const result = await CompanyModel.update(
    {
      photo_profile,
      name,
      type,
      description,
      website,
      email,
      phone_number,
      address
    },
    {
      where: {
        id: id
      },
      returning: true
    }
  );
  const data = { result, oldPhoto };
  return data;
};
module.exports = { getCompanyById, updateCompnyById };
