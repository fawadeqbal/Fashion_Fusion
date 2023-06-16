import express from 'express';
import {  getProductById, getProducts, postProduct } from '../controller/products.js';
import multer from "multer";

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./upload/');
  },
  filename: function(req,file,cb){
    cb(null,new Date().toISOString()+file.originalname);
  }
})
const fileFilter =(req,file, cb) => {
  if(file.mimetype==='image/jpeg'||file.mimetype==='image/png'){
    cb(null,true);
  } else{
    cb(null,false);
  }
}

const upload = multer({
  storage: storage,
  fileFilter:fileFilter
});


const router = express.Router();

router.get('/', getProducts);
router.post('/',upload.single('image'), postProduct);
router.get('/:id', getProductById);


export default router;
