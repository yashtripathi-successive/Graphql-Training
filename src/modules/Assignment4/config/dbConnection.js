import mongoose from "mongoose";

async function connectDB(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/successivedb')
        console.log("database connected successfully")
    }catch(err){
        console.log('database not connected')
    }
}

export default connectDB