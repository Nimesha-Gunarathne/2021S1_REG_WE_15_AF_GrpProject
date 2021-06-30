const Conference = require('../models/model.conference');

const createConference = async(req,res) => {

    try {
        const { title, description, date,keynoteSpeaker,gender,status } = req.body;
        if (!title || !description || !date || !keynoteSpeaker || !gender || !status) {
          return res.status(400).json({
            code: 400,
            success: false,
            status: "Bad Request",
            message: "Content can not be empty.",
          });
        }
  
        const ConferenceTitleCheck = await Conference.findOne({ title });
  
        if (ConferenceTitleCheck) {
          return res.status(400).json({
            code: 400,
            success: false,
            status: "Bad Request",
            message: "Conference Title is already exist.",
          });
        }
  
        const newConference = new Conference({
            title,
            description,
            date,
            keynoteSpeaker,
            gender,
            status
        });
  
        await newConference.save();
  
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          data: newConference,
          message: "New Conference is added successfully.",
        });
      } catch (err) {
        return res.status(500).json({
          code: 500,
          success: false,
          status: "Internal Server Error",
          message: err.message,
        });
      }
    
}

const getAllConference = async(req,res) => {
  await Conference.find({})
  .then(data => {
      res
      .status(200)
      .json({
        code: 200,
        success: true,
        status: "OK",
        data: data,
        message: "All "+data.length+ " Conference details are Received "
      });
  })
  .catch(error => {
      res
      .status(500)
      .send({error: error.message});
  });
}

const getPendingConference = async(req,res) => {
  await Conference.find({status:"pending"})
  .then(data => {
      res
      .status(200)
      .json({
        code: 200,
        success: true,
        status: "OK",
        data: data,
        message: "All Conference details are Received "
      });
  })
  .catch(error => {
      res
      .status(500)
      .send({error: error.message});
  });
}

const getApprovedConference = async(req,res) => {
  await Conference.find({status:"Approved"})
  .then(data => {
      res
      .status(200)
      .json({
        code: 200,
        success: true,
        status: "OK",
        data: data,
        message: "All Conference details are Received "
      });
  })
  .catch(error => {
      res
      .status(500)
      .send({error: error.message});
  });
}


const updateConferenceStatus = async (req, res) => {

  id = req.params.id;
  newStatus = req.body.status;

  console.log("id ",id);

  await Conference.findOneAndUpdate({ _id: id }, { $set: {status: newStatus} })
  .then(data => {
    res.status(200)
    .send({ message:"Updated" });
  })
  .catch(error => {
    res.status(500).send({ error: error.message });
  });
}

const getDoneConference = async(req,res) => {
  await Conference.find({status:"Done"})
  .then(data => {
      res
      .status(200)
      .json({
        code: 200,
        success: true,
        status: "OK",
        data: data,
        message: "All Conference details are Received "
      });
  })
  .catch(error => {
      res
      .status(500)
      .send({error: error.message});
  });
}

const getRejectConference = async(req,res) => {
  await Conference.find({status:"Reject"})
  .then(data => {
      res
      .status(200)
      .json({
        code: 200,
        success: true,
        status: "OK",
        data: data,
        message: "All Conference details are Received "
      });
  })
  .catch(error => {
      res
      .status(500)
      .send({error: error.message});
  });
}

module.exports={
    createConference,
    getAllConference,
    updateConferenceStatus,
    getPendingConference,
    getApprovedConference,
    getDoneConference,
    getRejectConference
};