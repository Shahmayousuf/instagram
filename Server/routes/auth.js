import express from "express";
const router = express.Router();
import mongoose from "mongoose";
const User = mongoose.model("User");
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import  {JWT_SECRET}  from "../key.js";
import  {requireLogin}  from "../midddleware/requireLogin.js";



// router.get("/protected",requireLogin,(req,res)=>{
//     res.send("helloo user")
// })
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ error: "please add all the fields" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(400).json({ error: "user already exist" });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
        });
        user
          .save()
          .then((user) => {
            res.json({ message: "saved successfuly" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "invalid email or password" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "ivalid email or password" });
      }
      bcrypt
        .compare(password, savedUser.password)
        .then((doMatch) => {
          if (doMatch) {
            // res.json({ message: "successfully signed in" });
            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);//create token by using sign method
            res.json({ token });
          } else {
            res.json({ error: "inavlid email or password" });
          }
        })
        .cath((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
export default router;
