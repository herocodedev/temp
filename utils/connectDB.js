const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGODB_URI;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(">>> Connect Successfully <<<");
  } catch (error) {
    console.log(error);
    console.log("Connect Fail!");
  }
};

module.exports = { connectMongoDB };
