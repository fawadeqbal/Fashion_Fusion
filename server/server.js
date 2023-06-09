import express from "express";
import products from "./routes/products.js";
import { connection } from "./db/connection.js";
import cors from 'cors'
import  registration  from "./routes/registration.js";

const app = express();
app.use(cors())
app.use(express.json())

connection
  .then(() => {
    console.log("Connected.");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/products", products);
app.use("/register",registration)

app.listen(8000);
