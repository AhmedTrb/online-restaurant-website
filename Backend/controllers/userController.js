import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// login user
const loginUser = async (req,res)=>{
    const {email,password }= req.body ;
    try {
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success:false,message:"user does not exist"});
        }
        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.json({success:false,message:"invalid email or password"}) ;
        }

        const token = createToken(user._id) ;
        res.json({success:true,token:token});
    } catch(error){
        console.log(error);
        res.json({sucess:false,message:`${error}`});
    }
}

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


// register user
const registerUser = async (req,res)=>{
    const {name,email,password} = req.body;

    try {
        // checking if user already exists
        const exist = await userModel.findOne({email});
        if (exist){
            return res.json({success:false,message:"email already exists"});
        }

        // validating email form and strong password
        if (!validator.isEmail(email)){
            return res.json({success:false,message:"enter valid email"});
        }
        if (password.length <8) {
            return res.json({success:false,message:"password length less than 8"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user = await newUser.save();

        const token = createToken(user._id);
        res.json({success:true,token})
    } catch (error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

export {loginUser,registerUser}