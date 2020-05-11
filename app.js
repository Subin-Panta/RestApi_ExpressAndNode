const express = require('express')
const app= express()
const mongoose=require('mongoose')
require('dotenv/config')
//MIddlewares
app.use('/posts',()=>{
    console.log("midlldeware")
})

//ROUTES
app.get('/',(req,res)=>{
    res.send('we are on home')
})
app.get('/posts',(req,res)=>{
    res.send('we are on posts')
})
//connect to db
mongoose.connect(process.env.ATLAS_URI,{ useNewUrlParser: true , useUnifiedTopology: true } ,()=>{
    console.log("connected to DB")
})
//Start Listening
app.listen(5000)