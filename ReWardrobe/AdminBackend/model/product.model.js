const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true   
    },
    previousPrice: {
        type: Number,
        required: false   // Optional, as it may not always be provided
    },
    image: {
        type: [String],  // Array of image URLs
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true   // Optional or may need to be adjusted depending on your data model
    },
    size: {
        type: [String],  // Array of sizes
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    colors: {
        type: [String],  // Array of colors
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    tags: {
        type: [String],  // Array of tags
        required: false   // Optional field, may not always be necessary
    },
    availability: {
        type: Boolean,
        required: true
    },
    trending: {
        type: Boolean,
        required: false   // Optional field, depends on whether the item is trending
    },
    stockQuantity: {
        type: Number,
        required: true   // Number of items left in stock
    }
});

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;