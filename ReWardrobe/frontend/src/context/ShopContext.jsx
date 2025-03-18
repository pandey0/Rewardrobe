import { createContext, useState } from "react";
import { product } from '../assets/assets'; // Ensure 'product' is imported correctly

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;

  // States for cart and wishlist
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [Isloggedin, setIsloggedin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Add to Cart logic
  const addToCart = (product, quantity, selectedSize, selectedColor) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prevCart,
        { ...product, quantity, selectedSize, selectedColor },
      ];
    });
  };

  const removeFromCart = (productId, selectedSize, selectedColor) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
      )
    );
  };

  const updateQuantity = (productId, selectedSize, selectedColor, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Add to Wishlist logic
  const addToWishlist = (product, selectedSize, selectedColor) => {
    setWishlist((prevWishlist) => {
      // Prevent adding duplicates to wishlist
      const existingProduct = prevWishlist.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (!existingProduct) {
        return [...prevWishlist, { ...product, selectedSize, selectedColor }];
      }
      return prevWishlist; // Prevent adding the same item again
    });
  };

  const removeFromWishlist = (productId, selectedSize, selectedColor) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter(
        (item) =>
          !(item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
      )
    );
  };

  // Toggle modal state
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const value = {
    currency,
    delivery_fee,
    product,
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    addToWishlist,
    removeFromWishlist,
    isModalOpen,
    openModal,
    closeModal,
    Isloggedin,
    setIsloggedin
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
