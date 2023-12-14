import mongoose from "mongoose";
const{ObjectId}=mongoose.Schema.Types


const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:'No photo posted yet'
    },
    postedBy:{
       type: ObjectId,
       ref:"User"
    }
    
})
const PostModel=mongoose.model("Post",postSchema)
export default PostModel