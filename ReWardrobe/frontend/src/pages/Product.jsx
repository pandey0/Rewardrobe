import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext"; 
import SizeColorSelector from "../components/SizeColorSelector";
import QuantitySelector from "../components/QuantitySelector";
import AddToCartButtons from "../components/AddToCartButtons";
import ProductImageGallery from "../components/ProductImageGallery";
import ProductDescription from "../components/ProductDescription";
import ToastNotification from "../components/PopAddCart";  // Import ToastNotification
import LoginalertModal from "../components/LoginalertModal"; // Import the modal component
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const { product, addToCart, addToWishlist, loading, error, Isloggedin, isModalOpen, openModal, closeModal,cart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (product.length > 0) {
      const foundProduct = product.find((item) => item.id === parseInt(id));
      setSelectedProduct(foundProduct);
    }
  }, [product, id]);

  useEffect(() => {
    if (selectedProduct) {
      setSelectedSize(selectedProduct.size[0]); // Set default size
      setSelectedColor(selectedProduct.color[0]); // Set default color
    }
  }, [selectedProduct]);

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAddToCart = async () => {
    if (selectedSize && selectedColor) {
      if (Isloggedin) {
        // Add to cart logic in context
        addToCart(selectedProduct, quantity, selectedSize, selectedColor);
  
        // Send the data of the added product (instead of the entire cart)
        const cartItem = {
          productId: selectedProduct.id, 
          quantity,
          selectedSize,
          selectedColor
        };
  
        try {
          // Make the POST request to add the item to the backend cart
          const response = await axios.post('/api/userfunctions/addtocart', cartItem);
          
          if (response.status === 200) {
            setToastMessage(`Added ${selectedProduct.name} to your cart!`);
          }
        } catch (error) {
          console.error('Error adding to cart:', error);
          setToastMessage('Failed to add product to the cart');
        }
      } else {
        openModal();  // Open modal for non-logged-in users
      }
    } else {
      console.log("Please select size and color.");
    }
  };
  

  const handleAddToWishlist = () => {
    if (selectedSize && selectedColor) {
      if (Isloggedin) {
        addToWishlist(selectedProduct, selectedSize, selectedColor);
        setToastMessage(`Added ${selectedProduct.name} to your wishlist!`);
      } else {
        openModal();  // Open modal for non-logged-in users
      }
    } else {
      console.log("Please select size and color.");
    }
  };

  return (
    <section className="container mx-auto max-w-[1200px] py-10 px-4 lg:px-10 font-poppins">
      {toastMessage && (
        <ToastNotification message={toastMessage} onClose={() => setToastMessage("")} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className="mb-10 lg:mb-0 lg:min-h-[500px]">
          <ProductImageGallery images={selectedProduct.images} productName={selectedProduct.name} />
        </div>
        <div className="flex flex-col gap-6">
          <ProductDescription
            name={selectedProduct.name}
            rating={selectedProduct.rating}
            reviews={selectedProduct.reviews}
            availability={selectedProduct.availability}
            brand={selectedProduct.brand}
            category={selectedProduct.category}
            sku={selectedProduct.sku}
            price={selectedProduct.price}
            previousPrice={selectedProduct.previousPrice}
            description={selectedProduct.description}
          />
          <SizeColorSelector
            sizes={selectedProduct.size}
            colors={selectedProduct.color}
            onSelectSize={setSelectedSize}
            onSelectColor={setSelectedColor}
          />
          <QuantitySelector
            quantity={quantity}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
          <AddToCartButtons
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        </div>
      </div>

      {/* Modal for non-logged-in users */}
      <LoginalertModal 
        isOpen={isModalOpen} // Pass modal visibility state
        onClose={closeModal} // Close the modal
      />
    </section>
  );
};

export default Product;
