const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGODB_URL;
// "mongodb+srv://herocodedev:0919612443@cluster0.2yvb9.mongodb.net/Gym_Exercises?retryWrites=true&w=majority";

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
