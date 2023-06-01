const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const AuthModel =require('../Models/UserModel.js')

module.exports={

    signup:async(req,res)=>{

        
        const {email,password,FullName}=req.body;
        try {
            const existinguser= await AuthModel.findOne({email});
            if(existinguser) return res.status(400).json({message:"User already exist"});
            
            const hashpassword= await bcrypt.hash(password,12)
    
            const result = await AuthModel.create({email,password:hashpassword,name:FullName});
            const token= jwt.sign({email:result.email,id:result._id},process.env.sceretkey,{expiresIn:"1h"});
            res.status(200).json({result,token,message:'Success'});
    
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Something went wrong",Error:error})
            
        }
    
    },

    signin:async(req,res)=>{
        const {email,password}=req.body;
        try {
            const existinguser =await AuthModel.findOne({email});
            if(!existinguser) return res.status(404).json({message:"User dont exist"});
            const Passwordcheck=await bcrypt.compare(password,existinguser.password);
            if(!Passwordcheck) return res.status(404).json({message:"Invalid credentials"});
    
            const token= jwt.sign({email:existinguser.email,id:existinguser._id},'test',{expiresIn:"1h"});
    
            res.status(200).json({result:existinguser,token,message:'scuesss'});
    
        } catch (error) {
    
            res.status(500).json({message:"Something went wrong",Error:error})
            
        }
    
    }
}