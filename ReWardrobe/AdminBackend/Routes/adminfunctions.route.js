const express = require("express");
const Middleware = require("../utils/authtoken.js");
const adminrouter = express.Router();
const { addproduct ,viewproducts,updateproduct,deleteproduct,getProductById,getimagelink} = require("../controller/adminfunctions.controller.js");
const upload = require("../utils/multer.js");

adminrouter.post(
  "/addproduct",
  
  upload.fields([
    { name: "image1", maxcount: 1 },
    { name: "image2", maxcount: 1 },
    { name: "image3", maxcount: 1 },
    { name: "image4", maxcount: 1 },
    { name: "image5", maxcount: 1 },
  ]),
  addproduct
);
adminrouter.get("/getproduct", Middleware,viewproducts);
adminrouter.get("/getproduct/:id",Middleware, getProductById);
adminrouter.put("/updateproduct/:id",Middleware,updateproduct);
adminrouter.delete("/deleteproduct/:id",Middleware, deleteproduct);
adminrouter.post("/getimagelink",upload.fields([
  {
    name: "image1",
    maxCount: 1
  }
]),getimagelink);
module.exports = adminrouter;