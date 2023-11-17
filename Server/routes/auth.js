import express  from "express";
const router=express.Router()
import mongoose from "mongoose";
const User = mongoose.model("User")
router.get('/',(req,res)=>{
  res.send("hello")
})
router.post('/signup',(req,res)=>{
 const {name,email,password}=req.body
 if(!email||!password||!name){
    return res.status(400).json({error:"please add all the fields"})
 }
User.findOne({email:email })
.then((savedUser)=>{
    if(savedUser){
        return res.status(400).json({error:"user already exist"})
    }
    const user=new User({
        email,
        password,
        name
    })
    user.save()
    .then(user=>{
        res.json({message:"saved successfuly"})
    })
    .catch(err=>{
        console.log(err);
    })
})
.catch(err=>{
    console.log(err);
})
})
export default router