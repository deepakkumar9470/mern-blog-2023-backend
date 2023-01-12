const router = require("express").Router();
const Post = require('../models/Post')
const {createPosts,getAllPosts,getPost,updatePost,deletePost,searchPost} =  require('../controllers/post-controller');

const {createComments, getAllComments, deleteComment} =  require('../controllers/comment-controller');

const {uploadPic,getPics} = require('../controllers/image-controller');

const upload = require('../utils/upload');

router.post('/create',createPosts)

router.get('/posts',getAllPosts)

router.get('/posts/:id',getPost)

router.post('/update/:id',updatePost)

router.delete('/posts/:id',deletePost)

router.post('/file/upload',upload.single('file') ,uploadPic)
router.get('/file/:filename',getPics)

router.post('/comment/create',createComments)

router.get('/comments',getAllComments)

router.delete('/comment/:id',deleteComment)

//router.get('/search',searchPost)

router.post('/search',searchPost)



module.exports = router