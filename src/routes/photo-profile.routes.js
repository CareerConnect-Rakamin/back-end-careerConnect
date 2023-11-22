const { PhotoControllers } = require('../controllers');
const { StoragePhoto, authMiddleware, validator } = require('../middlewares');
const express = require('express');
const path = require('path');

const router = express.Router();
const upload = StoragePhoto;
const uploadPath = path.join(__dirname, '../../public/uploads');
const { validate, requirements } = validator;

router.put(
  '/',
  authMiddleware.authenticate,
  upload.single('file'),
  [validate(requirements.editPhotoProfile)],
  PhotoControllers.UploadPhoto
);

// untuk mengambil foto profil, menggunakan format localhost:3000/api/v1/profile/photo/{id user}/{nama file foto}
router.use('/photo/:id', (req, res, next) => {
  express.static(path.join(uploadPath, req.params.id))(req, res, next);
});

module.exports = router;
