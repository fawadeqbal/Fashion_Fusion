import React, { createContext, useState, useMemo,useEffect } from "react";
import axios from "axios";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [wishList,setWishList]=useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      })
    
  }, [products]);
  const addToWishList = (product) => {
    const existingItemIndex = wishList.findIndex((item) => item.id === product.id);
    if (existingItemIndex >= 0) {
      console.log("Already Added")
    } else {
      setWishList([...wishList, product]);
    }
  };
  const removeItemWishList = (item) => {
    const updatedWishList = wishList.filter((product) => product.id !== item.id);
    setWishList(updatedWishList);
  };
  

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      setTotal(total + product.price);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setTotal(total + product.price);
    }
  };

  const incrQuan = (item) => {
    const updatedCart = cart.map((product) =>
      product.id === item.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
    setTotal(total + item.price);
  };

  const decrQuan = (item) => {
    const updatedCart = cart.map((product) =>
      product.id === item.id && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
    if (item.quantity > 0) {
      setTotal(total - item.price);
    }
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((product) => product.id !== item.id);
    setCart(updatedCart);
    setTotal(total - item.price * item.quantity);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    clearCart();
  };
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [products, searchTerm]);

  const store = {
    products,
    setProducts,
    cart,
    setCart,
    total,
    setTotal,
    searchTerm,
    setSearchTerm,
    addToCart,
    incrQuan,
    decrQuan,
    removeItem,
    clearCart,
    handleCheckout,
    filteredProducts,
    removeItemWishList,
    wishList,
    addToWishList
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
