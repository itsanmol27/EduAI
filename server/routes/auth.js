import { Router } from "express";
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs';
const router = Router();

router.post("/signup" , async (req,res)=>{
    try{
        const {name ,email , password , profilePhoto , authProvider} = req.body;
        
        const userExists = await User.findOne({email});
        if(userExists){
            return res.json({
                error : "User already exists!",
                status:false
            })
        }
        if(password){

            
            const salt = await bcrypt.genSalt(10);
            const hashedPass = bcrypt.hashSync(password , salt)
            const newUser = new User({
                name,
                email,
                password : hashedPass,
                profilePhoto,
                authProvider
            })
            newUser.save();
            return res.json({
                user: newUser,
                success : "User registered Successfully!",
                status:true
            })
        }
        else{
            const newUser = new User({
                name,
                email,
                profilePhoto,
                authProvider
            })
            newUser.save();
            return res.json({
                user: newUser,
                success : "User registered Successfully!",
                status:true
            })
        }
    }
    catch(err){
        console.log(err);
        return res.json({
            error : err,
            status:false
        })
    }
})

router.post("/signin" , async (req,res)=>{
    try{
        const {email , password , authProvider} = req.body;
        if(!authProvider && (!email || !password)){
            return res.json({
                error : "Fill all the details",
                status:false
            })
        }

        const userExists = await User.findOne({email});
        if(!userExists){
            return res.json({
                error : "No such User exists!",
                status:false
            })
        }

        if(password){
            const pass = bcrypt.compareSync(password , userExists.password);
            if(pass){
                return res.json({
                    user : userExists,
                    status:true
                })
            }
            else{
                return res.json({
                    error : "Wrong Password",
                    status:false
                })
            }
        }

        return res.json({
            user : userExists,
            status:true
        })
    }
    catch(err){
        console.log(err);
        return res.json({
            error : err
        })
    }
})

export default router;