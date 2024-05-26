// user.js
const mongoose = require('mongoose');

const ulSchema = new mongoose.Schema({
    name : {type : String},
    like: { type: Number },
    unlike: { type: Number }
}, {timestamp : true});

const ul = mongoose.model('ul', ulSchema);

module.exports = ul;
