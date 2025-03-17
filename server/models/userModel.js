import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password : {type : String},
    profilePhoto: { type: String },
    authProvider: { type: String },
    class:{type:String},
    tests:[{type:mongoose.Schema.Types.ObjectId , ref:"tests"}],
    aiMsg:{type:String}
})

const User = mongoose.model("User", userSchema);

export default User;