const path = require('path');
const File = require('../model/model.file');

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, cb) {
//       cb(null, './docs');
//     },
//     filename(req, file, cb) {
//       cb(null, `${new Date().getTime()}_${file.originalname}`);
//     }
//   }),
//   limits: {
//     fileSize: 10000000
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(pdf|doc|docx)$/)) {
//       return cb(
//         new Error(
//           'Upload only MS word or pdf templates'
//         )
//       );
//     }
//     cb(undefined, true); // continue with upload
//   }
// });

// Router.post(
//   '/upload',
//   upload.single('file'),
//   async (req, res) => {
//     try {
//       const { templateID, name } = req.body;
//       const { path, mimetype } = req.file;
//       const file = new File({
//         templateID,
//         name,
//         f_url: path,
//         f_type: mimetype
//       });
//       await file.save();
//       res.send('file uploaded successfully.');
//     } catch (error) {
//       res.status(400).send('Error while uploading file. Try again later.');
//     }
//   },
//   (error, req, res, next) => {
//     if (error) {
//       res.status(500).send(error.message);
//     }
//   }
// );

const getAllFilesResearch = async (req, res) => {
    // Router.get('/getAllFiles', async (req, res) => {
    try {
        //{name: "New"}
        const docs = await File.find({status:"initial", templateID:"A001"});
        const sortedByCreationDate = docs.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send('Something Went Wrong!!!');
    }
}

const getAllFilesWorkshop = async (req, res) => {
    // Router.get('/getAllFiles', async (req, res) => {
    try {
        //{name: "New"}
        const docs = await File.find({status:"initial", templateID:"L1"});
        const sortedByCreationDate = docs.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send('Something Went Wrong!!!');
    }
}

const download = async (req, res) => {
    // Router.get('/download/:id', async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        res.set({
            'Content-Type': file.f_type
        });
        
        res.sendFile(path.join(__dirname, '..', file.f_url));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
}

const viewPDF = async (req, res) => {
    //Router.get('/viewPDF/:id', async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        res.set({
            'Content-Type': file.f_type
        });
        res.sendFile(path.join(__dirname, '..', file.f_url));

    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
}

const updatePaper = async (req, res) => {

    id = req.params.id;
    newStatus = req.body.status;

    await File.findOneAndUpdate({ _id: id }, { $set: { status: newStatus} })
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
}

module.exports = {
    viewPDF,
    download,
    getAllFilesResearch,
    updatePaper,
    getAllFilesWorkshop
};