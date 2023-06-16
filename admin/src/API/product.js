import axios from 'axios'

export const addProduct = async (formData) => {
    try {
      await axios.post(`http://localhost:8000/products`, formData);
    } catch (error) {
      console.error(error);
    }
  };