const { companyServices } = require('../services')
const getCompanyById = async (req, res) => {
  try {
    const id = req.params.id
    const result = await companyServices.getCompanyById(id)
    res.json({
      status: 'success',
      data: result,
    })
  } catch (err) {
    res.status(err.status).json(err.message)
  }
}

module.exports = { getCompanyById }
