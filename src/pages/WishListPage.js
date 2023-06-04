import React, { useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import { Button, Grid, Typography } from "@material-ui/core";
import { RemoveCircleOutline, ShoppingCartOutlined } from "@material-ui/icons";

const Wishlist = () => {
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
      <Typography variant="h3" className="mb-4">
        Wishlist
      </Typography>
      {wishList.length === 0 ? (
        <Typography variant="subtitle1">Your wishlist is empty.</Typography>
      ) : (
        <Grid container spacing={3}>
          {wishList.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <div className="bg-white rounded-lg shadow p-4">
                <img src={item.image} alt={item.title} className="w-full h-40 object-contain mb-4" />
                <Typography variant="subtitle1" className="font-bold">
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
                >
                  Remove
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<ShoppingCartOutlined />}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Wishlist;
