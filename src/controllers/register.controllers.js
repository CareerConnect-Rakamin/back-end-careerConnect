const { registerService } = require('../services')

async function register(req, res) {
  try {
    const { success, user, error } = await registerService.registerJobSeeker(
      req.body,
    )

    if (success) {
      res.status(200).json({
        status: 'Register Success',
        data: user,
      })
    } else {
      res.status(500).json({
        status: 'Internal server error',
        message: error,
      })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({
      status: 'Internal server error',
      message: `${err}`,
    })
  }
}

module.exports = {
  register,
}
