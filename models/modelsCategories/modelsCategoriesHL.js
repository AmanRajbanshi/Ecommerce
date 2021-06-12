const mongoose = require('mongoose');

const HLSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    description: {
        type: String,
        required: true,
        trim:true
    },
    price: {
        type: Number,
        required: true,
        trim:true
    },
    image: {
        type: String,
        required: true,
        trim:true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
});

module.exports = HL =  new mongoose.model('HL',HLSchema);
