const { CompanyModel } = require('../models');

async function getCompanies({ page }) {
  try {
    const companies = await CompanyModel.findAll({
      offset: (page - 1) * 9,
      limit: 9
    });
    return companies;
  } catch (error) {
    throw new Error(`Error while fetching companies: ${error.message}`);
  }
}

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

module.exports = {
  getCompanies,
  getCompanyById,
  updateCompnyById
};
