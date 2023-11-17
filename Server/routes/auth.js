import express  from "express";
const router=express.Router()

router.get('/',(req,res)=>{
  res.send("hello")
})
router.post('/signup',(req,res)=>{
 const {name,email,password}=req.body
 if(!email||!password||!name){
    return res.status(400).json({error:"please add all the fields"})
 }
 res.send("submitted successfuly")
})
export default router