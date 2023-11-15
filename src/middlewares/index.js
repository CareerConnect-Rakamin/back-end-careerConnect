const authMiddlewares = require('./auth.middlewares');
const validator = require('./validator');
const uploadFileMiddleware = require('./multer.middlerware');
const morganMiddleware = require('./morgan.middlewares');

module.exports = {
  validator,
  morganMiddleware,
  authMiddlewares,
  uploadFileMiddleware
};
