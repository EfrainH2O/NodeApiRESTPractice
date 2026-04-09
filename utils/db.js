import mongoose from "mongoose"

export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.URI)
        console.log("connection init")
    }catch(error){
        console.log(error)
    }
}