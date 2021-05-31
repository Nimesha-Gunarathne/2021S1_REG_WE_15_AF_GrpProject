const express = require('express');
const router = express.Router();

const registrationController = require("../Controllers/RegistrationController");

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/paper/');
    },
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage });

router.post('/register', upload.any(), registrationController.register);

router.post('/signin', registrationController.signin);

router.get('/profile/:email', registrationController.getProfile);

//export the router
module.exports = router;