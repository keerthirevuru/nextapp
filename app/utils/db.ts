import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGOOSE_URI
const connect = async () => {

  try {
    mongoose.connect(MONGODB_URI!)
    console.log("Mongo Connection successfully established.");
    console.log(MONGODB_URI)
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
