const { authService } = require('../services');

async function login(req, res) {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({
      status: 'Success',
      data: token
    });
  } catch (err) {
    if (err.message == 401) {
      res.status(401).json({
        status: 'fail',
        message: 'Email atau Password salah'
      });
      return;
    }
    res.status(500).json({
      status: 'Internal server error',
      message: `${err}`
    });
  }
}

module.exports = {
  login
};
