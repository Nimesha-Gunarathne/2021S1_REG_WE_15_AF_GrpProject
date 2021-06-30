const express = require('express');
const router = express.Router();

const registrationController = require("../controllers/Registration.controller");

const multer = require('multer'); //for file upload
const path = require('path');

const storageObj = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads/paper/'); //file storage path
    },
    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storageObj });

router.post('/register', upload.any(), registrationController.register); // handle any file using multer and save before passing controll to the registration controller

router.post('/signin', registrationController.signin);

router.post('/ckeckStatus', registrationController.ckeckStatus);

router.get('/profile/:email', registrationController.getProfile);

router.put('/update-profile/:email', registrationController.updateProfile)

module.exports = router;