const { PhotoControllers } = require('../controllers');
const { StoragePhoto } = require('../middlewares');
const express = require('express');
const path = require('path');

const router = express.Router();
const upload = StoragePhoto;
const uploadPath = path.join(__dirname, '../../public/uploads');

router.put(
  '/profile/photo/:id',
  upload.single('file'),
  PhotoControllers.UploadPhoto
);
router.delete('/profile/photo/:id', PhotoControllers.DeletePhoto);

// untuk mengambil foto profil, menggunakan format localhost:3000/api/v1/profile/photo/{id user}/{nama file foto}
router.use('/profile/photo/:id', (req, res, next) => {
  express.static(path.join(uploadPath, req.params.id))(req, res, next);
});

module.exports = router;
