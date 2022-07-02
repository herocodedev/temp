const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
dotenv.config();
const corsConfig = {
  credential: true,
  origin: true,
};

// Config
app.use(cors(corsConfig));
app.use(express.json());

// Connect MongoDB
const { connectMongoDB } = require("./utils/connectDB");
connectMongoDB();

// Route
const mainRouter = require("./routes/index");
app.use("/api/v1", mainRouter);

app.listen(port, () => {
  console.log(`>>> App listening on port ${port} <<<`);
});
