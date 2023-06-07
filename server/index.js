import express from 'express';
import students from './routes/students.js';
import teachers from './routes/teachers.js';

const app = express();

//http provides us with four methods
//get, post, put, delete

app.use('/students', students);
app.use('/teachers', teachers);

app.listen(5000 , ()=>{
  console.log("")
});