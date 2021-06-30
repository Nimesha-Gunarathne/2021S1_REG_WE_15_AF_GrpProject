const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const ConfernceRoute= require('./src/api/api.conference');

// Nimesha
const PaymentRoute= require('./src/api/api.payment');
const fileRoute = require('./src/controllers/controller.template')

//sadunika
require('./src/models/Paper.model')
require('./src/models/User.model')
const Registrationroutes = require("./src/api/Registration.api");

//Galagoda
const FileRoute = require('./src/api/api.file');



dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8070;
const MONGODB_URI = process.env.MONGODB_URI;

// mongoose.connect(MONGODB_URI,{
//         useCreateIndex:true,
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//         useFindAndModify:false
// },(error) =>{
//     if(error){
//         console.log('DataBase ERROR: ',error.message);
//     }
// });

mongoose.connect('mongodb://127.0.0.1:27017/ICAF',{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
});

mongoose.connection.once('open', () => {
    console.log('Database Synced');
});

app.route('/').get((req,res)=>{
    res.send('SLIIT AF Project');
});

 app.use('/conference',ConfernceRoute());

 //Nimesha
 app.use('/payment', PaymentRoute());
 app.use('/template', fileRoute);

 //Sadunika
  app.use(express.static(__dirname + '/src/uploads'));
  app.use('/user', Registrationroutes)

//Galagoda
 app.use('/file',FileRoute());
 
app.listen(PORT, () =>{
    console.log(`Server is up and running on PORT ${PORT}`);
});