const { CompanyModel } = require('../models')

const getCompanyById = async (id) => {
  const result = await CompanyModel.findByPk(id)
  return result
}

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
    address,
  },
) => {
  const result = await CompanyModel.update(
    {
      photo_profile,
      name,
      type,
      description,
      website,
      email,
      phone_number,
      address,
    },
    {
      where: {
        id: id,
      },
      returning: true,
    },
  )
  return result
}
module.exports = { getCompanyById, updateCompnyById }
