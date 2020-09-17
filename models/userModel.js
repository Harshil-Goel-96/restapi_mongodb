import mongoose from "mongoose";
//Need to create Schema for our Collecton i.e users collection in test DB
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
//Need to create Model class from Schema.
//Model is used for creating and retrieving documents from collection.
//Specify Collection name & Schema name to map as parameters below.
const usersModel = mongoose.model("users", userSchema);
export default usersModel;
