const mongoose = require('mongoose');
const PaperModel = require('./Paper.model');
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
    full_name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    role: {
        type: String
    },
    password: {
        type: String
    }
},
    { timestamps: true });

module.exports = mongoose.model('users', UserSchema);