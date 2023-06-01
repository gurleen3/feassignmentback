const express =require('express');
const route=express.Router();


const User = require('../Controller/Controller.js');
const UserAuth=require('../Controller/UserAuth.js');


route.get('/',User.Greet)

//Login and SignUp route

route.post('/Signup',UserAuth.signup)
//Login
route.post('/Login',UserAuth.signin)

route.post('/coupons',User.storecoupon)
route.post('/getallcoupon',User.getallcoupon)


module.exports=route