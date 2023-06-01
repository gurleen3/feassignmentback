const mongoose = require('mongoose');
const UserAuth = require('../Models/UserModel.js')


module.exports={
    Greet:(req,res)=>
    {
        res.json({success:'Hello'})
    },
    storecoupon:async(req,res)=>
    {
        const {id,coupon}=req.body
     
        try {
            let user = await UserAuth.findById({_id:id})
            let Coupon=user?.coupon
            Coupon.push(coupon)
            await UserAuth.findByIdAndUpdate({_id:id},{coupon:Coupon},{new:true})
            let result = await UserAuth.findById({_id:id})
            res.status(200).json({message:'Success',result}) 
        } catch (error) {
            console.log(error)
            res.status(500).json({message:'Error',Error:error})   
        }
    },
    getallcoupon:async(req,res)=>{
        const{id}=req.body
        try {
            let result = await UserAuth.findById({_id:id})
            res.status(200).json({message:'Success',result}) 
        } catch (error) {
            console.log(error)
            res.status(500).json({message:'Error',Error:error})   
        }

    },


}