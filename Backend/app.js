const express = require('express');//import express
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express(); //initialise app with express

var corsOptions = {
    origin: "http://localhost:1234"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/src/uploads'));

const routes = require("./src/api/Registration.api");

app.use('/', routes)

//export the app
module.exports = app;