const mongoose = require('mongoose');


let userSchema= mongoose.Schema({
    username:String,
    comment:String
});

let User=mongoose.model('user', userSchema);

module.exports.User= User;