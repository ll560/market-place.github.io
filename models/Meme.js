const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    image: {type: String},
    name: {type: String},
    price:{type: Number},
    quantity:{type: Number},
    color: {type: String},

});

const Meme = mongoose.model('Meme', memeSchema)
module.exports = Meme
