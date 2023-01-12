
const mongoose = require('mongoose');
const grid = require('gridfs-stream');


let gfs;

const conn = mongoose.connection;
conn.once('open', () =>{
   gfs =  grid(conn.db, mongoose.mongo);
   gfs.collection('fs')
})




const url = 'https://mern-blog-web-app.herokuapp.com/api'


module.exports.uploadPic = (req,res) =>{
     try {
        if(!req.file){
            return res.status(400).json('File not found')
        }
   
        const imageURL = `${url}/file/${req.file.filename}`
        res.status(200).json(imageURL)
     } catch (error) {
        res.status(400).json(error)
     }
};


module.exports.getPics = async (req,res) =>{
    try {
        const file = await gfs.files.findOne({filename : req.params.filename});
        const readStream = gfs.createReadStream(file.filename)

        readStream.pipe(res)


    } catch (error) {
       res.status(400).json('Failed to process image')
    }
};