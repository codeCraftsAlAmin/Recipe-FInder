const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");

// create mongoose schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [3, "title's character should be at least three"],
    maxlength: [20, "title's character shouldn't be more than twenty"],
  },
  price: {
    type: Number,
    required: true,
    min: [100, "price must be at least one hundred"]
  }
});

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/myproducts");
    console.log("db is connected");
  } catch (error) {
    console.log(error.message);
    console.log("db isn't connected");
  }
};

app.get("/", (req, res) => {
  res.send("this is home route");
});

app.listen(PORT, async () => {
  console.log(`http://localhost:${PORT}`);
  await connectDb();
});
