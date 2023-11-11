const { companyRepositories } = require('../repositories')
const ResponseError = require('../utils/response.error.js')

const getCompanyById = async (id) => {
  if (isNaN(Number(id))) {
    const err = new ResponseError(400, 'Id must be a number')
    throw err
  }
  const result = await companyRepositories.getCompanyById(id)

  if (!result) {
    const err = new ResponseError(404, 'Company not found')
    throw err
  }
  return result
}

const updateCompanyById = async (params, body) => {
  const { id } = params
  if (isNaN(Number(id))) {
    const err = new ResponseError(400, 'Id must be a number')
    throw err
  }
  const {
    photo_profile,
    name,
    type,
    description,
    website,
    email,
    phone_number,
    address,
  } = body

  const cekId = await companyRepositories.getCompanyById(id)

  if (!cekId) {
    const err = new ResponseError(404, 'Company not found')
    throw err
  }

  const result = await companyRepositories.updateCompnyById(id, {
    photo_profile,
    name,
    type,
    description,
    website,
    email,
    phone_number,
    address,
  })

  if (!result) {
    const err = new ResponseError(500, 'Internal server error')
    throw err
  }
  return result
}
module.exports = { getCompanyById, updateCompanyById }
