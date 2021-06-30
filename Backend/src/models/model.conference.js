const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const ConferenceSchema = new mongoose.Schema({
    title: {type: String, requried: true, trim:true},
    description: {type: String, requried: true, trim: true},
    date: {type: Date, requried: true},
    keynoteSpeaker: {type: String, requried: true, trim:true},
    gender: {type: String, requried: true, trim:true},
    status:{type: String, requried: true, trim:true},
    // courses:[{type: mongoose.Schema.Types.ObjectId, requried: false, ref: 'courses'}] //many to many relationship

});

const Conference = mongoose.model('conference', ConferenceSchema);
module.exports = Conference;