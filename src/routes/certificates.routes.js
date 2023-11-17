const { CertificatesControllers } = require('../controllers');
const { StorageCertificates } = require('../middlewares');
const express = require('express');
const path = require('path');

const router = express.Router();
const upload = StorageCertificates;
const uploadPath = path.join(__dirname, '../../public/uploads/');

router.post(
  '/profile/certificates/:id',
  upload.single('file'),
  CertificatesControllers.AddCeritificates
);
router.put(
  '/profile/certificates/:id/:oldPath',
  upload.single('file'),
  CertificatesControllers.UpdateCertificates
);
router.delete(
  '/profile/certificates/:id/:oldPath',
  CertificatesControllers.DeleteCertificates
);

router.use('/profile/certificates/:id/:filename', (req, res) => {
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

module.exports = router;
