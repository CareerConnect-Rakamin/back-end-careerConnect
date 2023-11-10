const { companyRepositories } = require('../repositories')
const ResponseError = require('../utils/response.error')
const getCompanyById = async (id) => {
  if (!id) {
    const err = new ResponseError(400, 'Id is required')
    throw err
  }

  const result = await companyRepositories.getCompanyById(id)

  if (!result) {
    const err = new ResponseError(404, 'Company not found')
    throw err
  }
  return result
}

module.exports = { getCompanyById }
