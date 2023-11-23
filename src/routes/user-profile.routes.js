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
  '/profile/cv',
  authMiddleware.authenticate,
  authMiddleware.authorize(ROLES.JOBSEEKER),
  uploadCV.single('file'),
  CVControllers.UpdateCV
);

router.delete(
  '/profile/cv',
  authMiddleware.authenticate,
  authMiddleware.authorize(ROLES.JOBSEEKER),
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

router.use('/certificates/:filename', (req, res) => {
  const filePath = path.join(
    uploadPath,
    req.userdata.id,
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

router.use('/cv/:filename', (req, res) => {
  const filePath = path.join(uploadPath, req.userdata.id, req.params.filename);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(err.status).end();
    }
  });
});

module.exports = router;
