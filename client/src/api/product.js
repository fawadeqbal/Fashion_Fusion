import axios from "axios";

const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8000/products");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};

export { fetchProducts };
