const mongoose = require('mongoose');

const fileSchema = mongoose.Schema(
  {
    templateID: {type: String,required: true, trim: true},
    name: {type: String,required: true,trim: true},
    f_url: {type: String,required: true},
    f_type: {type: String,required: true}
  },
  {
    timestamps: true
  }
);

const File = mongoose.model('File', fileSchema);

module.exports = File;