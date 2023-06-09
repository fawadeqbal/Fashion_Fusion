import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: { rate: Number, count: Number },
  }
);

const productsModel = mongoose.model("product", productSchema);

export default productsModel;
