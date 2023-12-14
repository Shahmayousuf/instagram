import jwt from "jsonwebtoken";
import { JWT_SECRET } from '../key.js'
import User from "../models/user.js";

 export const requireLogin = (req, res, next) => {
  const { authorization } = req.headers;
  //authorization==Bearer fyyrehfnr7nfei8
  if (!authorization) {
    return res.status(402).json({ error: "you must be logged In" });
  }
  const token = authorization.replace("Bearer ", "");
  //verify jwt
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(402).json({ error: "you must be logged in" });
    }
    const { _id } = payload;
    User.findById(_id).then(userdata=>{
    req.User=userdata
    next();
    })
   
  });
};

