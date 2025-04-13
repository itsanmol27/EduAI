import mongoose from "mongoose";

const doubtSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, required:true},
    imageUrl:{type:String , required:true},
    imageText:{type:String , required:true},
    answer:{type:String},
})

const Doubt = mongoose.model("doubt" , doubtSchema);

export default Doubt