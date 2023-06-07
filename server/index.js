import express from 'express';
import User from './user'; // Assuming the user.js file is in the same directory

const app = express();

app.use(express.json());

// Create a new user
app.post('/user',);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
