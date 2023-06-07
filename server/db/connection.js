import mongoose from 'mongoose';
const dbURI = 'mongodb+srv://fawadiqbal:fawad321@spring.ojtyldc.mongodb.net/?retryWrites=true&w=majority'; // Replace 'mydatabase' with your database name

export const connection=mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  
connection.then(()=> console.log("Connected"))
.catch((e)=>console.log("Eror"+e))


