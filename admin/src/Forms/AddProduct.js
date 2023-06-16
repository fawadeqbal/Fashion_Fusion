import React, { useState, useEffect } from "react";
import { addProduct } from "../API/product";

const AddProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: null,
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const handleInputChange = (e) => {
    console.log(e.target.name);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.files[0] });
    console.log(product);
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("image", product.image);
    formData.append("rating[rate]", product.rating.rate);
    formData.append("rating[count]", product.rating.count);

    await addProduct(formData);
  }
  const handleCategory = (e) => {
    setProduct({ ...product, category: e.target.value });
    setSelectedCategory(e.target.value)
  };

  return (
    <div className="max-w-screen mx-auto mt-[115px] ml-4 mr-4">
      <h2 className="text-2l font-bold mb-4">Add a New Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">
        <div>
          <label className="block mb-2 font-medium text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Description:
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div>
        <label className="block mb-2 font-medium text-gray-700">
            Category:
          </label>
          <select
            className="ml-3 border-2 bg-white border-silver selection:border-gray-500 outline-none rounded-md mobile:ml-0"
            value={selectedCategory}
            onChange={(e)=>handleCategory(e)}
          >
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
        <div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImage}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md text-base text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
