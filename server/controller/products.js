import productsModel from "../model/products.js";

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    res.status(200).json(products);
    console.log("Get request successful");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id; // Extract the product ID from the request parameters

    // Find the product by ID in the database
    const product = await productsModel.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
    console.log("Get product by ID successful");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};
// Create a new product
const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { id, title, price, description, category, image, rating } = req.body;

    // Create a new product instance
    const newProduct = new productsModel({
      id,
      title,
      price,
      description,
      category,
      image, // Convert image to base64
      rating,
    });

    console.log("New product:", newProduct); // Check the new product object

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    console.log("Product created successfully");
    console.log("Saved product:", savedProduct); // Check the saved product object

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

export { createProduct, getProducts, getProductById };
