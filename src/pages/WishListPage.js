import React, { useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import { Button, Grid, Typography } from "@material-ui/core";
import { RemoveCircleOutline, ShoppingCartOutlined } from "@material-ui/icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishListPage = () => {
  const { wishList, removeItemWishList, addToCart } = useContext(StoreContext);

  useEffect(() => {
    console.log(wishList);
  });

  const handleRemoveItem = (item) => {
    removeItemWishList(item);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  if (!wishList) {
    return null; // or you can show a loading indicator
  }

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h3" className="mb-4 text-3xl font-semibold text-[#8a4af3] text-center">
        Wishlist
      </Typography>
      {wishList.length === 0 ? (
        <Typography variant="subtitle1" className="text-xl text-center">
          Your wishlist is empty.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {wishList.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <div className="bg-white rounded-lg shadow p-4 hover:border-[1px] hover:transition hover:duration-300 cursor-pointer border-indigo-600">
                <img src={item.image} alt={item.title} className="w-full h-40 object-contain mb-4" />
                <Typography variant="subtitle1" className="font-bold text-lg">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="mb-2">
                  Category: {item.category}
                </Typography>
                <Typography variant="body2" className="mb-2">
                  Price: ${item.price.toFixed(2)}
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<RemoveCircleOutline />}
                  onClick={() => handleRemoveItem(item)}
                  className="mr-2"
                >
                  Remove
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<ShoppingCartOutlined />}
                  onClick={() => {handleAddToCart(item); toast.info('Item added to cart')}}
                >
                  Add to Cart
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
      <ToastContainer/>
    </div>
  );
};

export default WishListPage;
