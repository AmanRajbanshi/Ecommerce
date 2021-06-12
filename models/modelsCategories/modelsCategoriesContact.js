const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
       trim:true
    },
    lastName: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim:true
    },
    phone: {
        type: Number,
        required: true,
        trim:true
    },
    province: {
        type: Number,
        required: true,
        trim:true
    },
    district: {
        type: String,
        required: true,
        trim:true
    },
    address: {
        type: String,
        required: true,
        trim:true
    },
    wardNo: {
        type: Number,
        required: true,
        trim:true
    },
});

module.exports = Contact =  new mongoose.model('Contact',contactSchema);
