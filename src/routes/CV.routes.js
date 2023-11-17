const { CVControllers } = require('../controllers');
const { StorageCV } = require('../middlewares');
const express = require('express');
const path = require('path');

const router = express.Router();
const upload = StorageCV;
const uploadPath = path.join(__dirname, '../../public/uploads');

router.put('/profile/cv/:id', upload.single('file'), CVControllers.UpdateCV);
router.delete('/profile/cv/:id', CVControllers.DeleteCV);

// untuk melihat data CV yang sudah diupload dengan format : id berdasarkan id user yang mengupload CV
// setelah itu nama file dari CVnya. contoh : localhost:3000/profile/cv/15/{nama CV}
router.use('/profile/cv/:id', (req, res, next) => {
  express.static(path.join(uploadPath, req.params.id))(req, res, next);
});

module.exports = router;
