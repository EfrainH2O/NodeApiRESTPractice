import mongoose from  "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    userName:{type: String, unique:true},
    password:String
}, 
{timestamps:true}
) 


export default mongoose.model("USER",userSchema)