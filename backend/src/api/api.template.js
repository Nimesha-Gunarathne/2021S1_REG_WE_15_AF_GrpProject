const express = require('express');
const router = express.Router();
const File_controller = require('../controllers/controller.file');

module.exports = function () {
    router.post('/upload', File_controller.uploadFile);
    router.get('/getAllFiles', File_controller.getAllFiles);
    router.get('/download/:id', File_controller.downloadFile);
    return router;
}