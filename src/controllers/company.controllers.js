const { companyServices } = require('../services')
const getCompanyById = async (req, res) => {
  try {
    const id = req.params.id
    const result = await companyServices.getCompanyById(id)
    res.json({
      message: 'Success',
      data: result,
    })
  } catch (err) {
    res.status(err.status).json({ message: err.message })
  }
}

const updateCompanyById = async (req, res) => {
  try {
    const result = await companyServices.updateCompanyById(req.params, req.body)
    res.json({
      message: 'Success',
      data: result,
    })
  } catch (err) {
    res.status(err.status).json({ message: err.message })
  }
}
module.exports = { getCompanyById, updateCompanyById }
