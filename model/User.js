const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    PhoneNo: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

exports.users = new mongoose.model('users', userSchema)
