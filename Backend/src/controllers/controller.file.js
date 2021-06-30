const path = require('path');
const File = require('../models/Paper.model');

const getAllFilesResearch = async (req, res) => {
    try {

        const docs = await File.find({ state: "PENDING", type: "Research Paper" });
        const sortedByCreationDate = docs.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send('Something Went Wrong!!!');
    }
}

const getAllFilesWorkshop = async (req, res) => {
    try {
        const docs = await File.find({ state: "PENDING", type: "Proposal Document" });
        const sortedByCreationDate = docs.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send('Something Went Wrong!!!');
    }
}

const download = async (req, res) => {
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
    try {
        const file = await File.findById(req.params.id);
        res.set({
            'Content-Type': "application/pdf"
        });
        res.sendFile(path.join(__dirname, '..', file.url));

    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
}

const updatePaper = async (req, res) => {

    id = req.params.id;
    newStatus = req.body.state;
    paymentStatus = "NOT APPLICABLE";

    if (newStatus == "APPROVED") {
        paymentStatus = "APPLICABLE"
    }

    await File.findOneAndUpdate({ _id: id }, { $set: { state: newStatus, payment: paymentStatus } })
        .then(data => {

            File.findOneAndUpdate({ _id: id }, { $set: { payment: paymentStatus } })
                .then(data => {
                })
                .catch(error => {
                });

            res.status(200).send({ data: data });

        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getApprovedWorkshops = async (req, res) => {
    try {
        const docs = await File.find({ state: "APPROVED", type: "Proposal Document" });
        const sortedByCreationDate = docs.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send('Something Went Wrong!!!');
    }
}

const getApprovedResearches = async (req, res) => {
    try {
        const docs = await File.find({ state: "APPROVED", type: "Research Paper" });
        const sortedByCreationDate = docs.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send('Something Went Wrong!!!');
    }
}

module.exports = {
    viewPDF,
    download,
    getAllFilesResearch,
    updatePaper,
    getAllFilesWorkshop,
    getApprovedWorkshops,
    getApprovedResearches
};