import express from 'express';
import dotenv from 'dotenv';
import TestRoute from "../routes/test.js"
import authRoute from "../routes/auth.js"
import lessonPlan from "../routes/lessonPlan.js"
import DoubtRoute from "../routes/doubt.js"
import dbConnect from '../utils/dbConnect.js';
import cors from "cors"
import fileUpload from 'express-fileupload';

const app = express();
dotenv.config();
dbConnect();

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use("/test" , TestRoute)
app.use("/doubt" , DoubtRoute)
app.use("/auth" , authRoute)
app.use("/lessonPlan" , lessonPlan)

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
})

app.listen(process.env.PORT, () => {
    console.log('Server started on ' + process.env.PORT);
})
