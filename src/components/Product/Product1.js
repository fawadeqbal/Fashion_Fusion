import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Product1 = ({ item }) => {
  const nav = useNavigate();
  const { addToCart, addToWishList } = useContext(StoreContext);

  const handleProduct = () => {
    nav(`/product/${item.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <img
        onClick={handleProduct}
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-contain mb-4 cursor-pointer"
        style={{ height: "200px" }} // Set the desired height of the image
      />
      <h2 className="text-lg font-bold mb-2">{item.title}</h2>
      <p className="text-sm mb-2">Category: {item.category}</p>
      <p className="text-sm mb-2">Price: ${item.price.toFixed(2)}</p>
      <div className="flex justify-between items-center">
        <button
          className="text-white bg-[#8a4af3] rounded-md shadow-md p-2"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
        <button
          className="text-white bg-[#3182ce] rounded-md shadow-md p-2 ml-2"
          onClick={() => addToWishList(item)}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default Product1;
