const validator = require('./validator');
const uploadFileMiddleware = require('./multer.middlerware');
const morganMiddleware = require('./morgan.middlewares');
const AuthMiddleware = require('./auth.middlewares');

const authMiddleware = new AuthMiddleware();

module.exports = {
  validator,
  morganMiddleware,
  authMiddleware,
  uploadFileMiddleware
};
