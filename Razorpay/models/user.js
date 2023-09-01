const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:'string',
        required: true,
        minlength:3,
        maxlength:30
    },email:{
        type:'string',
        required: true,
        minlength:3,
        maxlength:50,
        unique: true
    },
    password:{
        type:'string',
        required: true,
        minlength:3,maxlength:1024
    }
})
const User = mongoose.model('User',userSchema)
exports.User=User;