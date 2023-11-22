const {
  UserControllers,
  CVControllers,
  CertificatesControllers
} = require('../controllers');
const express = require('express');
const {
  StorageCertificates,
  StorageCV,
  authMiddleware
} = require('../middlewares');
const { validator } = require('../middlewares');
const { ROLES } = require('../utils/constants');
const path = require('path');

const router = express.Router();
const { validate, requirements } = validator;
const uploadCV = StorageCV;
const uploadCertificate = StorageCertificates;
const uploadPath = path.join(__dirname, '../../public/uploads');

router.get('/:id', UserControllers.GetUserProfile);
router.put(
  '/:id',
  authMiddleware.authenticate,
  validate(requirements.updateJobSeeker),
  authMiddleware.verifyUser,
  UserControllers.UpdateUserProfile
);

router.put(
  '/cv/:id',
  authMiddleware.authenticate,
  authMiddleware.verifyUser,
  authMiddleware.authorize(ROLES.JOBSEEKER),
  uploadCV.single('file'),
  CVControllers.UpdateCV
);

router.delete(
  '/cv/:id',
  authMiddleware.authenticate,
  authMiddleware.verifyUser,
  CVControllers.DeleteCV
);

router.post(
  '/certificates',
  authMiddleware.authenticate,
  authMiddleware.authorize(ROLES.JOBSEEKER),
  uploadCertificate.single('file'),
  [validate(requirements.addCertificate)],
  CertificatesControllers.AddCeritificates
);

router.delete(
  '/certificates/:id',
  authMiddleware.authenticate,
  authMiddleware.authorize(ROLES.JOBSEEKER),
  CertificatesControllers.DeleteCertificates
);

router.use('/certificates/:id/:filename', (req, res) => {
  const filePath = path.join(
    uploadPath,
    req.params.id,
    '/certificates',
    req.params.filename
  );
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(err.status).end();
    }
  });
});

// untuk melihat data CV yang sudah diupload dengan format : id berdasarkan id user yang mengupload CV
// setelah itu nama file dari CVnya. contoh : localhost:3000/profile/cv/15/{nama CV}
router.use('/cv/:id', (req, res, next) => {
  express.static(path.join(uploadPath, req.params.id))(req, res, next);
});

module.exports = router;
