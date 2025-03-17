import { Router } from "express";
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = Router();

router.post("/signup" , async (req,res)=>{
    try{
        const {email , password , profilePhoto , authProvider} = req.body;
        if(!authProvider && (!email || !password)){
            return res.status(422).json({
                error : "Fill all the details",
            })
        }
        if(!(password.length >= 8)){
            return res.status(422).json({
                error : "Password must be of atleast 8 characters",
            })
        }

        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(422).json({
                error : "User already exists!",
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password , salt)
        const newUser = new User({
            email,
            password : hashedPass,
            profilePhoto,
            authProvider
        })
        newUser.save();
        return res.status(200).json({
            success : "User registered Successfully!",
        })
    }
    catch(err){
        console.log(err);
        return res.status(400).json({
            error : err
        })
    }
})

router.post("/signin" , async (req,res)=>{
    try{
        const {email , password , authProvider} = req.body;
        if(!authProvider && (!email || !password)){
            return res.status(422).json({
                error : "Fill all the details",
            })
        }

        const userExists = await User.findOne({email});
        if(!userExists){
            return res.status(404).json({
                error : "No such User exists!",
            })
        }
        const payload = {
            id : userExists._id,
            email
        }
        const token = jwt.sign(payload , process.env.jwtSecret);

        if(password){
            const pass = await bcrypt.compare(password , userExists.password);
            if(pass){
                return res.send(200).json({
                    success : userExists,
                    token
                })
            }
            else{
                return res.send(400).json({
                    error : "Wrong Password"
                })
            }
        }

            return res.send(200).json({
                success : userExists,
                token
            })
    }
    catch(err){
        console.log(err);
        return res.status(400).json({
            error : err
        })
    }
})

export default router;