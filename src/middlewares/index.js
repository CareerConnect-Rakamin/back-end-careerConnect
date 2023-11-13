const authMiddlewares = require('./auth.middlewares');
const validator = require('./validator');
const uploadFileMiddleware = require('./multer.middlerware');

module.exports = { authMiddlewares, validator, uploadFileMiddleware };
