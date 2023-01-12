const mongoose = require('mongoose')


const CommentSchema = new mongoose.Schema({
    name  : {
        type: String,
        required: false,
    },
    postId  : {
        type: String,
        required: false,
    },
    comments : {
        type : String, required: false
    },
    date : {
        type : Date
    }
    
});

module.exports = mongoose.model('Comment', CommentSchema)