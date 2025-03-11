import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profilePhoto: { type: String, required: true },
    authProvider: { type: String, required: true },
    class:{type:String},
    tests:[{type:mongoose.Schema.Types.ObjectId , ref:"tests"}],
    aiMsg:{type:String}
})

const User = mongoose.model("User", userSchema);

module.exports = User;