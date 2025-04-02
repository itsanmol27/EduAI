import { Router } from "express";
import generateLessonPlan from "../utils/generateLessonPlan.js";

const router = Router();

router.post("/create" , async (req,res)=>{
    const {subjects , topics , grade} = req.body;
    console.log(subjects , topics , grade)
    const plan = await generateLessonPlan(subjects, topics, grade);
    console.log(plan);

    // const lessonPlan = await LessonPlan.create({subject, topic, grade})
    return res.json({plan, status:true})

})

export default router
