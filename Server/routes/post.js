import express from "express";
import mongoose from "mongoose";
// import { requireLogin } from "../midddleware/requireLogin";

const router = express.Router();

router.post("/createpost",(req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({ error: "Please add all the fields" });
  }
  console.log(req.User);
  res.send("okey");

});

export default router;
