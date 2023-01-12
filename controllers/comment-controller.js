const Comment = require('../models/Comment');


module.exports.createComments = async (req,res) =>{
      try {
           const comments = await new Comment(req.body)
           comments.save()
           res.status(201).json('Comment added successfully..')
      } catch (error) {
          res.status(500).json('Oops, error, when posting comments..')
      }

}

module.exports.getAllComments =  async (req,res) =>{
    try {
        
        //    const comments = await Comment.findById({postId : req.params.id})
        const comments = await Comment.find({}).sort({"date":-1})
           res.status(200).json(comments)
   } catch (error) {
       res.status(500).json('Oops, error, when finding comments data..')
   }

}



module.exports.deleteComment = async(req,res) =>{
    try {
         await Comment.findByIdAndDelete(req.params.id)
        
        res.status(200).json('Comment has been deleted..')
   } catch (error) {
       res.status(500).json('Oops, error, when deleting comments..')
   }
}




