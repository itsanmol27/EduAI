import { Router } from "express";
import handleFileUpload from "../utils/uploadImage.js";
import extractTextFromImage from "../utils/extractTextfromImage.js";
import solveDoubt from "../utils/solveDoubt.js";
import Doubt from "../models/doubtModel.js";

const router = Router();

router.post("/create" , async (req,res)=>{
    const {userId} = req.body;
    const file = req.files.image;
    console.log(file);

    const imageText = await extractTextFromImage(file);
    const response = await solveDoubt(imageText);
    const imageUrl = await handleFileUpload(file);
    console.log(imageUrl)

    const doubt = await Doubt.create({userId:1 ,imageUrl ,imageText, answer:response.content})
    return res.json({doubt, status:true})
})

export default router;