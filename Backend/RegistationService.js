const mongoose = require('mongoose');

require('dotenv').config({path: '.env'});

//Database conection
mongoose.connect(process.env.DATABASE,
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    }
);

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`Database Connection Error -> ${err}`);
});

require("./Models/Paper");
require("./Models/User");

const app = require('./app');

//start the server on port 3800
const server = app.listen(3800,() => {
    console.log(`Registation Running on Port ${server.address().port}`);
    
})