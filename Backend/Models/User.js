const mongoose = require('mongoose');
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
    },
    image: {
        type: String
    }
},
{ timestamps: true });

module.exports = mongoose.model('users', UserSchema);