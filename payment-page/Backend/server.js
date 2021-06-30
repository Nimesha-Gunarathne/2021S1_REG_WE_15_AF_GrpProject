const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const paymentAPI = require('./src/api/api.payment');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8088;

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

app.use('/payment', paymentAPI());

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});