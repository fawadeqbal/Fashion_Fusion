import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'

const Product = ({ item }) => {
  const { addToCart } = useContext(StoreContext);

  const iconContainerStyle =
    'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer';
  const imageContainerStyle =
    'flex items-center justify-center w-[100%] h-[100%] absolute opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.2)] duration-100';
  const imageStyle = 'w-full h-full object-cover';
  const parentDivStyle =
    'flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative';

  const handleAddToCart = () => {
    addToCart(item);
    alert("Item added to cart!");
  };

  return (
    <div className={parentDivStyle}>
      <img src={item.image} alt="product_image" className={imageStyle} style={{ height: '200px', width: '150px' }} />
      <div className={imageContainerStyle}>
        <div className={iconContainerStyle} onClick={handleAddToCart}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconContainerStyle}>
          <FavoriteBorderOutlined />
        </div>
        <Link to={`/product/${item.id}`}>
          <div className={iconContainerStyle}>
            <SearchOutlined />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
