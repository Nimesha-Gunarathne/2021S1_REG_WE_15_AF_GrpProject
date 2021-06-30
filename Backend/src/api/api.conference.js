const express = require('express');
const router = express.Router();
const Conferencecontroller = require('../controllers/controller.conference');

module.exports = function() {
    router.post('/create',Conferencecontroller.createConference);
    router.get('/getAllConference', Conferencecontroller.getAllConference);
    router.get('/getPendingConference', Conferencecontroller.getPendingConference);
    router.get('/getApprovedConference', Conferencecontroller.getApprovedConference);
    router.get('/getDoneConference', Conferencecontroller.getDoneConference);
    router.get('/getRejectConference', Conferencecontroller.getRejectConference);
    router.put('/updateStatus/:id', Conferencecontroller.updateConferenceStatus);
    return router;
}