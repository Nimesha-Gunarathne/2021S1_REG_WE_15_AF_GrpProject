const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
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
    },
    payment: {
        type: String,
        default: "NOT APPLICABLE"
    }
},
{ timestamps: true });

module.exports = mongoose.model('paper', PaperSchema);