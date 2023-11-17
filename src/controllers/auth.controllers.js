const { authService } = require('../services');
const logger = require('../utils/logger');

async function login(req, res) {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({
      status: 'Successfully Login',
      token: token
    });
  } catch (err) {
    if (err.message == 401) {
      res.status(401).json({
        status: 'failed',
        message: 'Incorrect Email or Password'
      });
      return;
    }
    logger.error({ status: 500, error: err });
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
}

module.exports = {
  login
};
