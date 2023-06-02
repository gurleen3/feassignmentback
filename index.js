const express=require('express');
const bodyparser=require('body-parser');
const app =express();
const cors=require('cors');
const mongoose =require('mongoose');
const route=require('./Routes/route')
require('dotenv').config();


app.use(cors())
app.use(bodyparser.json({limit:"100mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"100mb",extended:true}));
app.use('/user',route);
const PORT = process.env.PORT || 5000
const url=`mongodb+srv://gurleenkhalsa03:${process.env.passkey1}@cluster0.so4icql.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(PORT,()=>console.log(`Server running on ${PORT}`)))
.catch((error)=>console.log(error));






