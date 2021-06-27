const mongoose = require('mongoose');


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

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`Database Connection Error -> ${err}`);
});

require("./src/models/Paper.model");
require("./src/models/User.model");

const app = require('./app');

//start the server on port 3810
const server = app.listen(3810,() => {
    console.log(`Registation Running on Port ${server.address().port}`);
    
})