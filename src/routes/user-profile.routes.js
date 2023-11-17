const { UserControllers } = require('../controllers');
const express = require('express');

const router = express.Router();

router.get('/profile/:id', UserControllers.GetUserProfile);
router.post('/profile/', UserControllers.AddDataProfile);
router.put('/profile/:id', UserControllers.UpdateUserProfile);
router.put('/profile/user/:id', UserControllers.UpdateUser);

module.exports = router;
