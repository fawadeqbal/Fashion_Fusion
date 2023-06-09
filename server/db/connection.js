import mongoose from "mongoose";
const dbURI =
  "mongodb+srv://fawad:1111@clusterstore.wuakt30.mongodb.net/?retryWrites=true&w=majority";
export const connection = mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
