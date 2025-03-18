import React, { useState } from 'react';
import ProductForm from '../components/sellProductForm';
import ProductModal from '../components/sellModaldisplay';
import Button from '../components/sellButton';

const SellingPage = () => {
  const [products, setProducts] = useState([
    {
      itemName: '',
      itemCategory: '',
      itemMRP: '',
      itemPrice: '',
      itemDescription: '',
      itemImages: [],
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle image upload
  const handleImageUpload = (e, productIndex) => {
    const files = e.target.files;
    if (files.length > 0) {
      const updatedProducts = [...products];
      updatedProducts[productIndex].itemImages = [
        ...updatedProducts[productIndex].itemImages,
        ...files,
      ];
      setProducts(updatedProducts);
    }
  };

  // Handle input changes
  const handleInputChange = (e, index, field) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = e.target.value;
    setProducts(updatedProducts);
  };

  // Add a new product
  const addProduct = () => {
    setProducts([
      ...products,
      {
        itemName: '',
        itemCategory: '',
        itemMRP: '',
        itemPrice: '',
        itemDescription: '',
        itemImages: [],
      },
    ]);
  };

  // Remove a product
  const removeProduct = (index) => {
    const updatedProducts = products.filter((_, productIndex) => productIndex !== index);
    setProducts(updatedProducts);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open modal on clicking "Submit All Products"
  };

  // Final submit handling
  const handleFinalSubmit = () => {
    setProducts([
      {
        itemName: '',
        itemCategory: '',
        itemMRP: '',
        itemPrice: '',
        itemDescription: '',
        itemImages: [],
      },
    ]);
    setIsModalOpen(false); // Close modal after submission
    alert('Products submitted successfully!');
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when the close button is clicked
  };

  return (
    <div className="min-h-screen font-poppins">
      {/* Upload Items Section */}
      <section className="py-12 text-center border-t-4 border-b-4 border-gray-300">
        <h1 className="text-3xl sm:text-4xl text-gray-800 mb-4">
          Ready to Turn Your Clothes into Cash?
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-6">
          It's easy to start selling your pre-loved clothes. Just fill out the form below and you'll be on your way to earning!
        </p>

        {/* Button to go to selling process */}
        <a
          href="/sellhow"
          className="bg-transparent border-2 border-blue-500 text-blue-500 py-3 px-8 rounded-full text-lg hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Learn How to Sell & Earn Rewards
        </a>
      </section>

      {/* Upload Items Section */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl text-gray-800 mb-6 text-center">
            Upload Your Items
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {products.map((product, index) => (
              <ProductForm
                key={index}
                product={product}
                index={index}
                handleInputChange={handleInputChange}
                handleImageUpload={handleImageUpload}
                removeProduct={removeProduct}
              />
            ))}

            {/* Add Product Button */}
            <Button
              onClick={addProduct}
              text="Add Another Product"
              classes="bg-green-500 text-white py-3 px-8 text-lg hover:bg-green-600 transition duration-300 mt-6 w-full"
            />

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              text="Submit All Products"
              classes="bg-blue-500 text-white py-3 px-8 text-lg hover:bg-blue-600 transition duration-300 mt-6 w-full"
            />
          </form>
        </div>
      </section>

      {/* Modal for Product Summary */}
      <ProductModal
        isModalOpen={isModalOpen}
        products={products}
        handleFinalSubmit={handleFinalSubmit}
        closeModal={closeModal}
      />
    </div>
  );
};

export default SellingPage;
