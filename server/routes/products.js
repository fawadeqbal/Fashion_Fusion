import express from "express";
import { createProduct, getProductById, getProducts } from "../controller/products.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/",createProduct);
router.get("/:id",getProductById);

export default router;
