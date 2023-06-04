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
    navigate("/catagory");
  };

  const productTitle = (title) => {
    if (title.length > 20) {
      return <p>{title.substring(0, 20)}...</p>;
    } else {
      return <p>{title}</p>;
    }
  };

  return (
    <div className="mt-6 p-3">
      <div className="flex justify-center text-3xl text-[#8a4af3] "><span className="border-[1px] pl-8 pr-8 pt-1 pb-1 rounded-md border-[#8a4af3]">Cart</span></div>

      <div className="flex items-center justify-between mt-4 flex-wrap">
        <button
          className="btn bg-white text-[#8a4af3] border-[1px] border-[#8a4af3] mt-0 hover:text-[#fff]"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        <button className="btn mt-0" onClick={handleCheckout}>
          Checkout Now
        </button>
      </div>

      <div className="flex flex-row mt-7 flex-wrap">
        <div className="flex flex-col flex-1">
          {cart.map((item) => (
            <div className="mb-4 mr-4 flex h-auto items-center flex-wrap border-[1.5px] ease-in duration-100  border-indigo-600 p-5 rounded-lg" key={item.id}>
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
                </div>
              </div>

              <div className="flex-auto flex flex-col justify-end items-end mt-7">
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
                <p className="flex items-center justify-center text-xl mt-3">
                  <b>{'Total: $'+`${item.quantity*item.price}`}</b>
                </p>
              </div>
            </div>
          ))}
          
        </div>

        <div className="summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-[1px] border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mb-6">
          <h1 className="text-2xl">SUMMARY</h1>
          <div className="summaryItem flex justify-between w-full">
            <p>SubTotal:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="summaryItem flex justify-between w-full">
            <p>Shipping:</p>
            <p>$10</p>
          </div>
          <div className="summaryItem flex justify-between w-full">
            <p>Shipping Discount:</p>
            <p>-$10</p>
          </div>
          <div className="summaryItem flex justify-between w-full text-3xl font-bold">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button className="btn btn-red" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
