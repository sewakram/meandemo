var express = require('express');
var router = express.Router();
var multer  = require('multer');
var cors = require('cors');
router.use(cors());
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './client/src/assets/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const refstorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './client/src/assets/refuploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);  // if true add only jpeg or png file 
//   } else {
//     cb(null, false); // if false not added img
//   }
// };

// const upload = multer({
//   storage: storage,
//   // limits: {
//   //   fileSize: 1024 * 1024 * 5
//   // },
//   fileFilter: fileFilter
// });
router.use(function (req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
var upload = multer({ storage : storage }).any('m_image');
router.post('/gallery', function(req,res){
       upload(req,res,function(err) {
        // console.log(req.body);
        // console.log(req.files);
        console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.json(req.files);
        // res.end("File is uploaded");
    });
});

var refupload = multer({ storage : refstorage }).any('ref_image');
router.post('/refgallery', function(req,res){
       refupload(req,res,function(err) {
        // console.log(req.body);
        // console.log(req.files);
        console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.json(req.files);
        // res.end("File is uploaded");
    });
});

 module.exports=router;