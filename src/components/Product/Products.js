import React, { useContext, useEffect, useState } from 'react';
import Products1 from './Product1';
import { StoreContext } from '../../context/StoreContext';

const Products = ({ category }) => {
  const { products } = useContext(StoreContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const filter = products.filter((product) => product.category === category);
    setFilteredProducts(filter);
  }, [category]);

  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
    color: isHovered ? 'blue' : 'black',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
  };

  return (
    <div>
      <h2
        className="mt-5 text-2xl font-bold mb-4"
        style={titleStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {capitalizedCategory}
      </h2>
      <div className="flex flex-wrap p-5 justify-center items-center m-2" id="products">
        {filteredProducts.map((item, key) => (
          <Products1 item={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Products;
