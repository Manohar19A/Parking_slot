const mongoose = require('mongoose')
const contactSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true,
    },
    phone:{
        type:'string',
        required: true,
    }
},{
    timestamps: true,
})
module.exports = mongoose.model('Contact',contactSchema)