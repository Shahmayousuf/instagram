import express from "express";

import mongoose from "mongoose";
// import USerModel from "./models/user";

import router from "./routes/auth.js"
const app = express();
app.use(express.json())
app.use(router)


const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/instagram");
    console.log("mongodb connectd");
  } catch (error) {
    console.log("mongodb not connectd");
    throw error;
  }
};
connectdb();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
