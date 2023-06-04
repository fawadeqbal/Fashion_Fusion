import React, { useContext } from "react";
import Counter from "../components/Counter";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, total, incrQuan, decrQuan, removeItem, clearCart } =
    useContext(StoreContext);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleContinueShopping = () => {
    navigate("/category");
  };

  const productTitle = (title) => {
    if (title.length > 20) {
      return <p>{title.substring(0, 20)}...</p>;
    } else {
      return <p>{title}</p>;
    }
  };

  return (
    <div className="p-3">
      <div className="flex justify-center text-5xl">Cart</div>

      <div className="flex items-center justify-between mt-4 flex-wrap">
        <button
          className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] mt-0 hover:text-[#fff]"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        <div className="flex underline text-lg hover:cursor-pointer m-5">
          <p>Items in your Cart: {cart.length}</p>
          <p className="ml-5">Wishlist Items: 0</p>
        </div>
        <button className="btn mt-0" onClick={handleCheckout}>
          Checkout Now
        </button>
      </div>

      <div className="flex flex-row mt-7 flex-wrap">
        <div className="flex flex-col flex-1">
          {cart.map((item) => (
            <div className="m-4 flex w-full h-auto items-center flex-wrap" key={item.id}>
              <div className="product flex pl-5 self-start">
                <img
                  className="product_img w-[7rem]"
                  src={item.image}
                  alt="product_img"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>
                    {item.id}
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>
                    {productTitle(item.title)}
                  </p>
                  <p>
                    <b className="mr-2">Category:</b>
                    {item.category}
                  </p>
                  <p>
                    <b className="mr-2">Price:</b>${item.price.toFixed(2)}
                  </p>
                  <p className="text-[20px]">
                    <b className="mr-2 text-[#8a4af3]">Total:</b>${(
                      item.price * item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex-auto flex flex-col justify-center items-center mt-7">
                <Counter
                  quantity={item.quantity}
                  incrQuan={() => incrQuan(item)}
                  decrQuan={() => decrQuan(item)}
                />
                <button
                  className="btn btn-red mt-3 ml-10 right"
                  onClick={() => removeItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <hr className="mb-7 mt-7" />
        </div>

        <div className="summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mb-6">
          <h1 className="text-2xl">SUMMARY</h1>
          <div className="summaryItem flex justify-between mt-3 w-full">
            <p>SubTotal:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="summaryItem flex justify-between mt-3 w-full">
            <p>Shipping:</p>
            <p>$10</p>
          </div>
          <div className="summaryItem flex justify-between mt-3 w-full">
            <p>Shipping Discount:</p>
            <p>-$10</p>
          </div>
          <div className="summaryItem flex justify-between mt-3 w-full text-3xl font-bold">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button className="btn btn-red mt-7" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;