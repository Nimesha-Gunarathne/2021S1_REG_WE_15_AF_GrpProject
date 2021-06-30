const mongoose = require('mongoose');
const express = require('express');//import express
const bodyParser = require("body-parser");
const cors = require("cors");

//env file config
require('dotenv').config({path: '.env'});

//Database conection
mongoose.connect(process.env.DATABASE,
    {
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify: false,
        //useCreateIndex: true
    }
);

// mongoose.Promise = global.Promise;
// mongoose.connection.on('error', (err) => {
//     console.error(`Database Connection Error -> ${err}`);
// });

require("./src/models/Paper.model");
require("./src/models/User.model");

const app = express(); //initialise app with express

// var corsOptions = {
//     origin: "http://localhost:1234"
// };

// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/src/uploads'));

const routes = require("./src/api/Registration.api");

app.use('/', routes)

//start the server on port 3810
const server = app.listen(3810,() => {
    console.log(`Registation Running on Port ${server.address().port}`);
    
})