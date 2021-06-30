const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const PaperSchema = new mongoose.Schema({
    email: {
        type: String
    },
    type: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    state: {
        type: String,
        default: "PENDING"
    }
},
{ timestamps: true });

module.exports = mongoose.model('paper', PaperSchema);