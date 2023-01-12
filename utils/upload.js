const {GridFsStorage} = require('multer-gridfs-storage');
const multer = require('multer');


const storage = new GridFsStorage({
  url: process.env.Mongo_URL,
  options : { useNewUrlParser: true,useUnifiedTopology: true},
  file: (req, file) => {

    const match = ['image/png', 'image/jpg', 'image/jpeg']

    if(match.indexOf(file.mimeType) === -1){
        return `${Date.now()}.blog.${file.originalname}`;
    }

    return { 
        bucketName : 'photoes',
        filename : `${Date.now()}.blog.${file.originalname}`
    }
    
  }
});

module.exports = multer({ storage });
