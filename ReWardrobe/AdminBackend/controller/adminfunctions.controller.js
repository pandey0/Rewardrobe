const cloudinary = require("cloudinary").v2;
const productModel = require("../model/product.model.js");

const addproduct = async (req, res) => {
  try {
    
    const {
      name,
      description,
      price,
      previousPrice,
      category,
      subcategory,
      size,
      stock,
      colors,
      rating,
      reviews,
      brand,
      sku,
      material,
      weight,
      tags,
      availability,
      trending,
      stockQuantity,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const image5 = req.files.image5 && req.files.image5[0];
    const images = [image1, image2, image3, image4, image5].filter(
      (item) => item !== undefined
    );

   
    let imageUrls = await Promise.all(
      images.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path);
        return result.secure_url;
      })
    );
    console.log(imageUrls);


    const newProduct = new productModel({
      name,
      description,
      price,
      previousPrice,
      category,
      subcategory,
      size: size ? size.split(",") : [], 
      stock,
      colors: colors.split(","),
      rating,
      reviews,
      brand,
      sku,
      material,
      weight,
      tags: tags ? tags.split(",") : [],
      availability,
      trending,
      stockQuantity,
      image: imageUrls, 
    });

    
    await newProduct.save();

    
    res.status(201).json({
      message: "Product added successfully!",
      product: newProduct,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error adding product", error: error.message });
  }
};
const viewproducts= async(req,res) => {
    try {
        const products = await productModel.find();
        res.status(200).json({
            message: "Products fetched successfully!",
            products: products,
          });
          console.log(products);
    } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: "Error fetching products", error: error.message });
      }
};
const deleteproduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productModel.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", error: "Product not found" });
    }
    await productModel.deleteOne({ _id: productId });
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
};
const updateproduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedData = req.body;
    const product = await productModel.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", error: "Product not found" });
    }
    await productModel.updateOne({ _id: productId }, { $set: updatedData });
    res.status(200).json({ message: "Product updated successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id; // Get the product ID from the request parameters
    const product = await productModel.findById(productId); // Query the database for the product

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        error: "Product not found"
      });
    }

    res.status(200).json({
      message: "Product fetched successfully!",
      product: product
    });
    console.log(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching product",
      error: error.message
    });
  }
};
const getimagelink = async (req, res) => {
  try {
    const image1 = req.files.image1 && req.files.image1[0];
    const result = await cloudinary.uploader.upload(image1.path);
    res.status(200).json({
      message: "Image uploaded successfully!",
      link: result.secure_url
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error uploading image",
      error: error.message
    });
  }
};

module.exports = {
  addproduct,
  viewproducts,
  deleteproduct,
  updateproduct,
  getProductById,
  getimagelink
};
