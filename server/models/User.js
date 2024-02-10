const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     username: String,
     email: String,
     city: String,
     occupation: String,
     address: String,
     phonenumber:Number
})

const User = mongoose.model('User', userSchema);
module.exports = User;