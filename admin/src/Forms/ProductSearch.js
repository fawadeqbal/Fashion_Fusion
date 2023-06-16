import React, { useState } from 'react';

const ProductSearch = () => {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedProductData, setUpdatedProductData] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform the search operation here using the productId
    // For simplicity, let's assume you have a function called fetchProductById
    // const fetchedProduct = fetchProductById(productId);
    // setProduct(fetchedProduct);
  };

  const handleEdit = () => {
    setIsEditMode(true);
    setUpdatedProductData(product);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Perform the update operation here using the updatedProductData
    // For simplicity, let's assume you have a function called updateProductById
    // updateProductById(productId, updatedProductData);
    setIsEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProductData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto p-4 mt-[6%]">
      <form onSubmit={handleSearch} className="mb-4">
        <label htmlFor="productId" className="block text-sm font-medium text-gray-700 mb-1">
          Product ID
        </label>
        <div className="flex">
          <input
            type="text"
            id="productId"
            name="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="mt-1 flex-1 block w-full py-2 px-3 border border-gray-300 rounded-l-md text-base text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Search
          </button>
        </div>
      </form>
      {product && (
        <div>
          <h2 className="text-xl font-medium mb-2">{product.title}</h2>
          <p className="text-gray-500 mb-2">Price: ${product.price}</p>
          <p className="text-gray-500 mb-2">Description: {product.description}</p>
          <p className="text-gray-500 mb-2">Category: {product.category}</p>
          <p className="text-gray-500 mb-2">Rating Rate: {product.rating.rate}</p>
          <p className="text-gray-500 mb-4">Rating Count: {product.rating.count}</p>
          {isEditMode ? (
            <form onSubmit={handleUpdate}>
              <label htmlFor="updatedTitle" className="block text-sm font-medium text-gray-700 mb-1">
                Updated Title
              </label>
              <input
                type="text"
                id="updatedTitle"
                name="title"
                value={updatedProductData.title || ''}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md text-base text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {/* Render other fields for updating here */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={handleEdit}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
