const validator = require('./validator');
const morganMiddleware = require('./morgan.middlewares');
const AuthMiddleware = require('./auth.middleware');

const authMiddleware = new AuthMiddleware();

module.exports = {
  validator,
  morganMiddleware,
  authMiddleware
};
