import express from "express";
import students from "./routes/students.js";
import teachers from "./routes/teachers.js";
import { connection } from "./db/connection.js";

const app = express();

connection
  .then(() => {
    console.log("Connected.");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/students", students);
app.use("/teachers", teachers);

app.listen(5000);
