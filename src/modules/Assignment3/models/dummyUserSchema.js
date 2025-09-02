import mongoose from "mongoose";

const dummyUserSchema = new mongoose.Schema({

    username:{type:String,requird:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})


export default mongoose.model('dummyUser',dummyUserSchema)