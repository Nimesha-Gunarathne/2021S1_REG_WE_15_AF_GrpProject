const express = require('express');
const router = express.Router();
const File_Controller = require('../controllers/controller.file');

module.exports = function () {
    router.get('/viewPDF/:id', File_Controller.viewPDF);
    router.get('/download/:id', File_Controller.download);
    router.get('/getAllFilesResearch', File_Controller.getAllFilesResearch);
    router.put('/updatePaper/:id', File_Controller.updatePaper);
    router.get('/getAllFilesWorkshop', File_Controller.getAllFilesWorkshop);
    
    return router;
}