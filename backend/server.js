const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileRoute = require('./src/controllers/controller.file')
// require('./db/db');

// const templateAPI = require('./src/api/api.template')

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/file_upload', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

//mongodb connection open
mongoose.connection.once('open', () => {
  console.log('Database Connected');
});

//not mandatory 
app.route('/').get((req, res) => {
  res.send('Working up to now');
});

// app.use('/template', templateAPI());
app.use(fileRoute);

app.listen(3050, () => {
  console.log('server started on port 3050');
});