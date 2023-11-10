const { CompanyModel } = require('../models')

const getCompanyById = async ({ params }) => {
  const id = parseInt(params)
  const result = await CompanyModel.findByPk(id)
  return result
}

module.exports = { getCompanyById }
