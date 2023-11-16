const { verify } = require('jsonwebtoken');
const { secretKey } = require('../config');
const { usersService } = require('../services');

class AuthMiddleware {
  constructor() {}

  authenticate = async (req, res, next) => {
    const authorization = String(req.headers.authorization);
    if (!authorization || !authorization.includes('Bearer')) {
      res.sendStatus(401);
      return;
    }

    const token = authorization?.slice(7);
    const payload = verify(token, secretKey);
    if (!payload) {
      res.sendStatus(401);
      return;
    }

    const user = await usersService.getUserById(payload.id);
    if (!user) {
      res.sendStatus(401);
      return;
    }
    req.userdata = user;

    next();
  };

  authorize = (...roles) => {
    return async (req, res, next) => {
      const userdata = req.userdata;
      if (!userdata) {
        res.sendStatus(403);
        return;
      }

      const isRoleValid = roles.includes(userdata.role);
      if (!isRoleValid) {
        res.sendStatus(403);
        return;
      }
      next();
    };
  };
}

module.exports = AuthMiddleware;
