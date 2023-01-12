const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({
    title  : {
        type: String,
        required: true,
        unique : true
    },
    desc : {
        type : String,
        required: true
    },
    pic : {
        type : String,
        required: false
    },
    username : {
        type : String,
        required: true
    },
    categories : {
        type : String,
        required: false
    },
    createdDate:  {
        type  : Date
    }
})

module.exports = mongoose.model('Post', PostSchema)



