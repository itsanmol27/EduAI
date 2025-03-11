import mongoose from "mongoose";

export default async function dbConnect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/")
        console.log("Db connected")
    } catch (error) {
        console.log(error)
    }
}