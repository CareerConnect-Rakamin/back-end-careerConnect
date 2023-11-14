const { Router } = require('express');
const authRoute = require('./auth.routes');

const router = Router();

router.use('/auth', authRoute);

module.exports = router;
