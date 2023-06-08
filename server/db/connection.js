import mongoose from "mongoose";
const dbURI =
  "mongodb+srv://fawadiqbal:fawad321@spring.ojtyldc.mongodb.net/?retryWrites=true&w=majority";
export const connection = mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
